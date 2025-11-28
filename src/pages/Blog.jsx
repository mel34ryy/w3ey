import "./Blog.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../components/layout/Banner";
import Reveal from "../components/effects/Reveal";


export default function Blog() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !prefersReducedMotion) {
            setTimeout(() => {
              entry.target.style.animationPlayState = "running";
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((reveal) => {
      reveal.style.animationPlayState = "paused";
      observer.observe(reveal);
    });

    return () => observer.disconnect();
  }, []);
const { t } = useTranslation();

  return (
    <div className="blog">
      <Banner>{t("navbar.blogs")}</Banner>
      <div className="container blog-hero col-md-7 col-lg-10 my-5 text-center">
        <p className="blog-bg-babyblue blog-paragraph px-4 py-1 rounded-1 mx-auto text-center">
         {t("blog.our_blog")}
        </p>
        <Reveal>
        <h2 className="blog-title mb-4 mt-3 fw-bold fs-1">
          {t("blog.insights_from")} <span className="blog-highlight-text"> {t("blog.experts")  }</span>
        </h2>
        <div className="paragraph d-flex justify-content-center align-items-center flex-column mx-auto ">
          <p>
           {t("blog.intro_paragraph")}
          </p>
          <ul className="blog mt-2 mb-3 fs-6">
            <li>
                {t("blog.point_1")}
            </li>
            <li>   {t("blog.point_2")}</li>
            <li>
                 {t("blog.point_3")}
            </li>
            <li>
                 {t("blog.point_4")}
            </li>
          </ul>
        </div>

        </Reveal>
      </div>
      <main className="main-content">
        <div className="container">
          <section className="blog-grid">
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="frontend"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                      alt="Blog Thumbnail"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.frontend")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.1_title")}</h3>
                    <p className="card-excerpt">
                     {t("blog.articles.1_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By John Doe</span> | <span>Oct 15, 2023</span> |{" "}
                      <span>5 min read</span>
                    </div>
                    <Link to="/blog1" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="backend"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                      alt="Node.js Best Practices"
                      className="cover-image"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.backend")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.2_title")}</h3>
                    <p className="card-excerpt">
                     {t("blog.articles.2_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Jane Smith</span> | <span>Sep 20, 2023</span> |{" "}
                      <span>7 min read</span>
                    </div>
                    <Link to="/blog2" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="algorithms"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                      alt="Blog Thumbnail"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.algorithms")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.3_title")}</h3>
                    <p className="card-excerpt">
                      {t("blog.articles.3_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Alex Johnson</span> | <span>Aug 10, 2023</span> |{" "}
                      <span>6 min read</span>
                    </div>
                    <Link to="/blog3" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="career"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                      alt="Landing Your First Dev Job"
                      className="cover-image"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.career")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.4_title")}</h3>
                    <p className="card-excerpt">
                      {t("blog.articles.4_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Sam Lee</span> | <span>Jul 5, 2023</span> |{" "}
                      <span>4 min read</span>
                    </div>
                    <Link to="/blog4" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="frontend"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80"
                      alt="CSS Grid Layout"
                      className="cover-image"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.frontend")}</span>
                    </div>
                    <h3 className="card-title"></h3>
                    <p className="card-excerpt">
                      {t("blog.articles.5_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Mia Chen</span> | <span>Jun 12, 2023</span> |{" "}
                      <span>8 min read</span>
                    </div>
                    <Link to="/blog5" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="backend"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                      alt="Blog Thumbnail"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.backend")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.6_title")}</h3>
                    <p className="card-excerpt">
                     {t("blog.articles.6_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Raj Patel</span> | <span>May 18, 2023</span> |{" "}
                      <span>9 min read</span>
                    </div>
                    <Link to="/blog6" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="algorithms"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=800&q=80"
                      alt="Blog Thumbnail"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.algorithms")}</span>
                    </div>
                    <h3 className="card-title"> {t("blog.articles.7_title")}</h3>
                    <p className="card-excerpt">
                      {t("blog.articles.7_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Lena Kim</span> | <span>Apr 22, 2023</span> |{" "}
                      <span>7 min read</span>
                    </div>
                    <Link to="/blog7" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="career"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
                      alt="Blog Thumbnail"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.career")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.8_title")}</h3>
                    <p className="card-excerpt">
                     {t("blog.articles.8_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Tom Wilson</span> | <span>Mar 8, 2023</span> |{" "}
                      <span>6 min read</span>
                    </div>
                    <Link to="/blog8" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
              <div
                className="col-lg-4 col-md-6 blog-item"
                data-category="frontend"
              >
                <article className="blog-card reveal h-100">
                  <div className="card-image">
                    <img
                      src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80"
                      alt="Blog Thumbnail"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-tags">
                      <span className="badge bg-navy">{t("blog.categories.frontend")}</span>
                    </div>
                    <h3 className="card-title">{t("blog.articles.9_title")}</h3>
                    <p className="card-excerpt">
                     {t("blog.articles.9_excerpt")}
                    </p>
                    <div className="card-meta">
                      <span>By Zoe Garcia</span> | <span>Feb 14, 2023</span> |{" "}
                      <span>5 min read</span>
                    </div>
                    <Link to="/blog9" className="btn btn-accent">
                      {t("blog.articles.read_more")}
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
