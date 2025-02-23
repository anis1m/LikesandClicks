import React from "react";
import "../css_files/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="inside-footer">
        <h1>
          Got a Project that you would like to discuss{" "}
          <a href="" style={{ color: "orange" }}>
            Contact Us <i className="fa-solid fa-arrow-right" />
          </a>
        </h1>

        <div>
          <aside>
            <h1>Likes and Clicks</h1>
            <p>Copyright &copy; 2025 Likes and Clicks </p>
          </aside>
          <aside>
            <h2>Australia</h2>
            <blockquote>
              <p>Location</p>
              <p>Level 7/757 Ann St, Fortitude Valley QLD 4006</p>
            </blockquote>
            <blockquote>
              <p>Call</p>
              <p>1300 699 571</p>
            </blockquote>
            <blockquote>
              <p>Email</p>
              <p>info [at] appgurus.com.au</p>
            </blockquote>
          </aside>
          <aside>
            <p>Flutter App Development</p>
            <p>React Native App Development</p>
            <p>Android App Development</p>
            <p>iOS App Development</p>
            <p>Native App Development</p>
            <p>Hybrid App Development</p>
            <p>UI/UX Design Services</p>
            <p>Web Development</p>
            <p>Support and Maintenance</p>
            <p>Staff Augmentation</p>
            <p>Free Consultation</p>
          </aside>
          <aside>
            <p>About Us</p>
            <p>Our Work</p>
            <p>Process</p>
            <p>App Idea</p>
            <p>App Marketing</p>
            <p>FAQ’s</p>
            <p>Blogs</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </aside>
        </div>
      </div>

      <div className="outside-footer">
        <aside>
          <p>Blog</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Support</p>
          <p>Contact Us</p>
        </aside>
        <aside>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
