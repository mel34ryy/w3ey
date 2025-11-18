import "../Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog1() {
  const navigate = useNavigate();
  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>

      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
        alt="Mastering React Hooks"
        className="cover-image"
      />

      <h1 className="blog-title">Mastering React Hooks</h1>
      <p className="blog-subtitle">
        Dive deep into React Hooks for building dynamic UIs with efficiency and
        elegance.
      </p>

      <div className="blog-content">
        <p>
          <strong>Why Hooks?</strong> React Hooks revolutionized the way we
          write components by enabling functional components to hold state and
          side‑effects. No more class components, lifecycle methods or `this`
          binding — hooks bring simplicity, power, and readability.
        </p>

        <h3>1. useState & useReducer</h3>
        <p>
          The <code>useState</code> hook lets you declare local state in a
          functional component:
        </p>
        <pre>
          <code>const [count, setCount] = useState(0);</code>
        </pre>
        <p>
          For more complex state logic you can use <code>useReducer</code> which
          mirrors Redux‑style state updates and helps with predictable state
          transitions.
        </p>

        <h3>2. useEffect & Side‑Effects</h3>
        <p>
          With the <code>useEffect</code> hook you handle tasks like data
          fetching, subscriptions, timers or manual DOM changes:
        </p>
        <pre>
          <code>{`useEffect(() => {
  document.title = \`Count: \${count}\`;
  return () => {
    // clean-up if needed
  };
}, [count]);`}</code>
        </pre>

        <h3>3. useContext & Global State</h3>
        <p>
          Avoid prop‑drilling! <code>useContext</code> lets you tap into broader
          application context easily:
        </p>
        <pre>
          <code>const theme = useContext(ThemeContext);</code>
        </pre>
        <p>
          You can combine it with <code>useReducer</code> for a lightweight
          global state without needing heavy libraries.
        </p>

        <h3>4. Custom Hooks: Reusable Logic</h3>
        <p>
          When you find yourself repeating state‑effect logic across components,
          it’s time to create a custom hook — a function starting with “use”:
        </p>
        <pre>
          <code>{`function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);
  return data;
}`}</code>
        </pre>
        <p>Now any component can call this hook and stay clean and focused.</p>

        <h3>5. Performance Hooks & Optimization</h3>
        <p>
          For complex UIs consider using <code>useMemo</code>,{" "}
          <code>useCallback</code>, and <code>React.memo</code> to avoid
          unnecessary renders and keep your UI snappy.
        </p>

        <p>
          Mastering hooks helps you build{" "}
          <em>cleaner components, better abstractions, and newer patterns</em>.
          Whether you’re building single‑page apps, micro‑frontends or reusable
          libraries, hooks are your toolkit for modern React.
        </p>

        <p>
          <strong>By John Doe | Oct 15, 2023 | 5 min read</strong>
        </p>
      </div>
    </div>
  );
}
