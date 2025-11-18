import "../Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog5() {
  const navigate = useNavigate();
  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>

      <img
        src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80"
        alt="CSS Grid Layout"
        className="cover-image"
      />

      <h1 className="blog-title">CSS Grid Mastery</h1>
      <p className="blog-subtitle">
        Build responsive layouts with the power of CSS Grid.
      </p>

      <div className="blog-content">
        <p>
          CSS Grid is a powerful layout system available in CSS that enables
          developers to create responsive and flexible grid-based designs
          easily. Unlike older layout techniques such as floats or flexbox
          alone, Grid allows for two-dimensional control — both rows and
          columns.
        </p>

        <p>
          To get started, you define a grid container using{" "}
          <code>display: grid;</code> and then specify rows and columns using{" "}
          <code>grid-template-rows</code> and <code>grid-template-columns</code>
          .
        </p>

        <pre>
          <code>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}`}</code>
        </pre>

        <p>
          This creates a 3-column grid with equal-width columns and a 20px gap
          between them. Items placed inside this container automatically align
          to the grid structure.
        </p>

        <h3>Placing Items on the Grid</h3>
        <p>
          You can position items precisely using the <code>grid-column</code>{" "}
          and <code>grid-row</code> properties.
        </p>

        <pre>
          <code>{`.item1 {
  grid-column: 1 / 3;
  grid-row: 1;
}`}</code>
        </pre>

        <p>
          This makes the first item span across the first two columns in the
          first row, giving you full control over layout placement without
          complex calculations or floats.
        </p>

        <h3>Responsive Design Made Easy</h3>
        <p>
          CSS Grid simplifies creating layouts that adapt to different screen
          sizes. You can use media queries or the <code>auto-fit</code> and{" "}
          <code>minmax()</code> functions to make grids responsive.
        </p>

        <pre>
          <code>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`}</code>
        </pre>

        <p>
          This layout automatically adjusts the number of columns based on
          available space, ensuring that each grid item remains readable and
          well-proportioned on all devices.
        </p>

        <p>
          Mastering CSS Grid allows developers to design modern, scalable, and
          visually appealing interfaces efficiently — a must-have skill for any
          frontend developer.
        </p>

        <p>
          <strong>By Mia Chen | Jun 12, 2023 | 8 min read</strong>
        </p>
      </div>
    </div>
  );
}
