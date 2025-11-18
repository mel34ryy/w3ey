import "../Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog9() {
  const navigate = useNavigate();

  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>

      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
        alt="JavaScript ES6 Features"
        className="cover-image"
      />

      <h1 className="blog-title">JavaScript ES6 Features</h1>
      <p className="blog-subtitle">
        Modern JavaScript for cleaner, more efficient code.
      </p>

      <div className="blog-content">
        <p>
          ES6 (ECMAScript 2015) introduced many new features to JavaScript that
          make coding cleaner, more readable, and more efficient. Understanding
          these features helps developers write modern, maintainable code.
        </p>

        <h3>1. Let and Const</h3>
        <p>
          Use <code>let</code> for block-scoped variables and <code>const</code>{" "}
          for constants to prevent unexpected behavior from <code>var</code>.
        </p>

        <pre>
          <code>{`const pi = 3.1415;
let radius = 5;`}</code>
        </pre>

        <h3>2. Arrow Functions</h3>
        <p>
          Arrow functions provide a shorter syntax and lexical <code>this</code>{" "}
          binding.
        </p>

        <pre>
          <code>{`const add = (a, b) =&gt; a + b;`}</code>
        </pre>

        <h3>3. Template Literals</h3>
        <p>
          Template literals allow embedding expressions in strings using
          backticks <code>`</code>.
        </p>

        <pre>
          <code>{`const name = "Zoe";
console.log(\`Hello, \${name}!\`);`}</code>
        </pre>

        <h3>4. Destructuring</h3>
        <p>
          Destructuring makes it easier to extract values from arrays or
          objects.
        </p>

        <pre>
          <code>{`const [x, y] = [1, 2];
const {title, author} = {title: "ES6", author: "Zoe"};`}</code>
        </pre>

        <h3>5. Modules</h3>
        <p>
          ES6 modules allow importing and exporting code between files,
          improving organization and reusability.
        </p>

        <pre>
          <code>
            {`// utils.js export const sum = (a, b) =&gt; a + b; // main.js import{" "}
            {sum} from './utils.js';`}
          </code>
        </pre>

        <p>
          Mastering ES6 features enables developers to write modern JavaScript
          that is more concise, readable, and maintainable.
        </p>

        <p>
          <strong>By Zoe Garcia | Feb 14, 2023 | 5 min read</strong>
        </p>
      </div>
    </div>
  );
}
