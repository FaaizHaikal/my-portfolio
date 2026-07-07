import './ContactPage.css';

function ContactPage() {
  return (
    <section id="contact">
      <div className="corner-quarter-circle"></div>
      <div className="contact-content">
        <div className="headline-row">
          <h2>Contact me.</h2>
          <div className="circle-stripes"></div>
        </div>
        <a href="mailto:faaizhaikal@gmail.com" className="email-action-row">
          <div className="email-text-group">
            <div className="email-decorator-circle"></div>
            <span className="email-address">faaizhaikal@gmail.com</span>
          </div>
          <div className="email-arrow">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </a>
        <div className="contact-footer">
          <p className="copyright">@ Faa'iz Haikal Hilmi 2026</p>
          <span className="footer-separator">|</span>
          <div className="socials">
            <a
              href="https://github.com/FaaizHaikal"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/faaizhaikal"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
