import "../Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog7() {
  const navigate = useNavigate();

  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>

      <img
        src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
        alt="Graph Theory Basics"
        className="cover-image"
      />

      <h1 className="blog-title">Graph Theory Basics</h1>
      <p className="blog-subtitle">
        Essential concepts for solving complex problems.
      </p>

      <div className="blog-content">
        <p>
          Graph theory is a cornerstone of computer science and mathematics. It
          provides a framework for modeling relationships and connections
          between objects, making it essential for solving problems in
          networking, optimization, and algorithms.
        </p>

        <h3>1. What Is a Graph?</h3>
        <p>
          A graph consists of a set of vertices (or nodes) and edges that
          connect pairs of vertices. Graphs can be directed or undirected,
          weighted or unweighted, depending on the nature of relationships they
          represent.
        </p>

        <pre>
          <code>{`Vertices (V) = {A, B, C, D}
Edges (E) = {(A, B), (B, C), (C, D), (A, D)}`}</code>
        </pre>

        <p>
          For example, in a social network, vertices represent users and edges
          represent friendships or connections.
        </p>

        <h3>2. Types of Graphs</h3>
        <ul>
          <li>
            <strong>Directed Graph:</strong> Edges have direction, representing
            one-way relationships (like Twitter follows).
          </li>
          <li>
            <strong>Undirected Graph:</strong> Edges have no direction,
            representing mutual relationships (like Facebook friends).
          </li>
          <li>
            <strong>Weighted Graph:</strong> Each edge has a weight, often
            representing cost, distance, or time.
          </li>
        </ul>

        <h3>3. Graph Representation</h3>
        <p>
          Graphs can be represented in multiple ways — adjacency lists,
          adjacency matrices, or edge lists. The adjacency list is
          memory-efficient and widely used.
        </p>

        <pre>
          <code>{`// Example: Adjacency List Representation
const graph = {
  A: ['B', 'D'],
  B: ['A', 'C'],
  C: ['B', 'D'],
  D: ['A', 'C']
};`}</code>
        </pre>

        <h3>4. Common Graph Algorithms</h3>
        <p>
          Some of the most important algorithms in computer science are based on
          graph theory:
        </p>
        <ul>
          <li>
            <strong>Breadth-First Search (BFS):</strong> Explores all neighbors
            at the current depth before moving deeper.
          </li>
          <li>
            <strong>Depth-First Search (DFS):</strong> Explores as far as
            possible along each branch before backtracking.
          </li>
          <li>
            <strong>Dijkstra’s Algorithm:</strong> Finds the shortest path
            between nodes in a weighted graph.
          </li>
          <li>
            <strong>Kruskal’s & Prim’s Algorithms:</strong> Used for finding
            Minimum Spanning Trees (MST).
          </li>
        </ul>

        <pre>
          <code>{`// Example: BFS
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];

  while (queue.length) {
    const node = queue.shift();
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      queue.push(...graph[node]);
    }
  }
}`}</code>
        </pre>

        <h3>5. Real-World Applications</h3>
        <p>
          Graph theory is applied in numerous domains — from social media
          analysis and search engine ranking to traffic routing, recommendation
          systems, and AI pathfinding.
        </p>

        <p>
          Understanding graph theory basics gives developers the ability to
          model complex relationships efficiently and solve a wide range of
          computational problems.
        </p>

        <p>
          <strong>By Lena Kim | Apr 22, 2023 | 7 min read</strong>
        </p>
      </div>
    </div>
  );
}
