import "../Blog.css";
import { useNavigate } from "react-router-dom";

export default function Blog4() {
  const navigate = useNavigate();
  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>

      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
        alt="Landing Your First Dev Job"
        className="cover-image"
      />

      <h1 className="blog-title">Landing Your First Dev Job</h1>
      <p className="blog-subtitle">
        Tips and strategies for breaking into the tech industry.
      </p>

      <div className="blog-content">
        <p>
          Starting your career in tech can feel overwhelming — endless job
          postings, required skills, and the challenge of standing out among
          hundreds of candidates. But with the right approach, breaking into the
          industry becomes much more achievable.
        </p>

        <h3>1. Build a Strong Portfolio</h3>
        <p>
          Employers want to see what you can do, not just what you know. Create
          small but impressive projects that demonstrate your skills — whether
          it’s a responsive website, a REST API, or a data visualization
          dashboard.
        </p>

        <p>
          Host your work on GitHub and include live demos when possible. Quality
          matters more than quantity — three strong, well-documented projects
          can make a big difference.
        </p>

        <h3>2. Learn the Right Skills</h3>
        <p>
          Focus on technologies that are in demand. For web developers, that
          might mean HTML, CSS, JavaScript, and frameworks like React or
          Node.js. For backend or data roles, learn databases, APIs, and Python
          or Java.
        </p>

        <p>
          Understanding version control (Git), basic DevOps, and soft skills
          like communication also adds a lot of value.
        </p>

        <h3>3. Network Effectively</h3>
        <p>
          Many first jobs come from referrals rather than job boards. Join local
          developer meetups, online communities, or LinkedIn groups.
          Contributing to open source projects is another great way to connect
          with other professionals and showcase your abilities.
        </p>

        <h3>4. Tailor Your Applications</h3>
        <p>
          Don’t send the same CV to every company. Customize your resume and
          cover letter to highlight relevant experience and match the company’s
          values and tech stack.
        </p>

        <h3>5. Prepare for Interviews</h3>
        <p>
          Practice both technical and behavioral interview questions. Be ready
          to explain your thought process, not just give answers. Mock
          interviews with friends or online platforms can help build confidence.
        </p>

        <p>
          Breaking into tech takes persistence. Keep learning, keep applying,
          and stay consistent — your first opportunity will come faster than you
          expect.
        </p>

        <p>
          <strong>By Sam Lee | Jul 5, 2023 | 4 min read</strong>
        </p>
      </div>
    </div>
  );
}
