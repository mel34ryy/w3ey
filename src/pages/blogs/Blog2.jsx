import "../Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog2() {
  const navigate = useNavigate();
  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>

      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
        alt="Node.js Best Practices"
        className="cover-image"
      />

      <h1 className="blog-title">Node.js Best Practices</h1>
      <p className="blog-subtitle">
        Secure and scalable backend development with Node.js essentials.
      </p>

      <div className="blog-content">
        <p>
          Node.js is a powerful platform for building scalable and efficient
          backend applications. Understanding best practices helps developers
          write maintainable, secure, and high-performance code.
        </p>

        <h3>1. Project Structure & Modularization</h3>
        <p>
          Organize your project into modules and folders for clarity. Separate
          routes, controllers, models, and utilities to maintain a clean
          architecture.
        </p>

        <pre>
          <code>
            project/ ├─ controllers/ ├─ models/ ├─ routes/ ├─ utils/ └─
            server.js
          </code>
        </pre>

        <h3>2. Error Handling</h3>
        <p>
          Proper error handling prevents crashes and improves security. Use
          middleware for centralized error management in Express:
        </p>

        <pre>
          <code>{`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});`}</code>
        </pre>

        <h3>3. Asynchronous Programming</h3>
        <p>
          Use async/await instead of nested callbacks for readability and to
          avoid “callback hell”:
        </p>

        <pre>
          <code>{`async function fetchData() {
  try {
    const result = await database.getData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}`}</code>
        </pre>

        <h3>4. Security Best Practices</h3>
        <ul>
          <li>Validate and sanitize input data.</li>
          <li>Use HTTPS and secure headers (Helmet).</li>
          <li>Manage environment variables securely.</li>
          <li>Protect against SQL/NoSQL injection.</li>
        </ul>

        <h3>5. Performance Optimization</h3>
        <p>
          Cache frequently requested data, use clustering for multi-core
          systems, and leverage streaming for large data processing.
        </p>

        <p>
          Following Node.js best practices ensures your backend is reliable,
          scalable, and secure, ready to handle production workloads
          efficiently.
        </p>

        <p>
          <strong>By Jane Smith | Sep 20, 2023 | 7 min read</strong>
        </p>
      </div>
    </div>
  );
}
