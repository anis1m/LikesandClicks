import React, { useEffect, useRef } from "react";
import "../css_files/ITServices.css";

function ITServices() {
  const itservicesref = useRef();
  useEffect(() => {
    const observe = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const figures = entry.target.querySelectorAll("aside figure");
          for (let i = 0; i < figures.length; i++) {
            figures[i].style.transform = "translateY(0px)";
            figures[i].style.opacity = 1;
            figures[i].style.transition = "transform 2s ease";
          }

          observer.disconnect();
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(observe, options);

    if (itservicesref.current) {
      observer.observe(itservicesref.current);
    }

    return () => {
      if (itservicesref.current) {
        observer.unobserve(itservicesref.current);
      }
    };
  }, []);

  return (
    <div className="it-services" ref={itservicesref}>
      <blockquote>
        <h2>Our IT Services</h2>
        <h1>
          COMPREHENSIVE SOLUTIONS <br /> TAILORED TO YOUR NEEDS
        </h1>
      </blockquote>
      <aside>
        <figure>
          <h3>1. Marketing Automation</h3>
          <img src="/images/Image 771.jpg" />
          <blockquote>
            <ul>
              <li>Email Marketing Automation</li>
              <li>Social Media Automation</li>
              <li>Lead Nurturing & Scoring</li>
              <li>CRM & Sales Automation</li>
              <li>Customer Journey Automation</li>
              <li>Chatbot & AI-driven Automation</li>
              <li>Analytics & Reporting Automation</li>
            </ul>
          </blockquote>
        </figure>
        <figure>
          <h3>2. SEO</h3>
          <img src="/images/Image 772.jpg" />
          <blockquote>
            <ul>
              <li>Local SEO</li>
              <li>Enterprise SEO</li>
              <li>eCommerce SEO</li>
              <li>Lead Generation Seo</li>
              <li>Content Strategy SEO</li>
              <li>Content Marketing SEO</li>
              <li>Link Building SEO</li>
              <li>White Label SEO</li>
            </ul>
          </blockquote>
        </figure>
        <figure>
          <h3>3. CRO</h3>
          <img src="/images/Image 774.jpg" />
          <blockquote>
            <ul>
              <li>A/B Testing</li>
              <li>Landing Page Optimization</li>
              <li>User Behavior Analysis</li>
              <li>Website Speed Optimization</li>
              <li>Personalization & Dynamic Content</li>
              <li>Call-to-Action (CTA) Optimization</li>
              <li>Form Optimization</li>
              <li>Heatmaps & Session Recording</li>
            </ul>
          </blockquote>
        </figure>
        <figure>
          <h3>4 . Google Analytics</h3>
          <img src="/images/Image 775.jpg" />
          <blockquote>
            <ul>
              <li>Real-time Traffic Monitoring</li>
              <li>User Behavior Analysis</li>
              <li>Audience Demographics & Interests</li>
              <li>Traffic Source Tracking</li>
              <li>Goal & Conversion Tracking</li>
              <li>E-commerce Performance Analysis</li>
              <li>Event & Click Tracking</li>
              <li>Custom Reports & Dashboards</li>
            </ul>
          </blockquote>
        </figure>
      </aside>
    </div>
  );
}

export default ITServices;
