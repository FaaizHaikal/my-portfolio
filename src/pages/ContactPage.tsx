import './ContactPage.css';

function ContactPage() {
  return (
    <section id="contact">
      <div className="left">
        <h2>
          Contact <span>Me</span>
        </h2>
        <p>
          If you have any questions or want to work together, feel free to
          contact me.
        </p>
        <div className="primary-contact">
          <div className="item">
            <i className="fa-solid fa-at"></i>
            <div className="description">
              <h6>EMAIL</h6>
              <p>faaizhaikal@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <div className="description">
              <h6>PHONE</h6>
              <p>+62 821-2535-4249</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <form action="">
          <input type="text" name="Name" placeholder='Your Name' required/>
          <input type="email" name="Email" placeholder='Your Email' required/>
          <textarea name="Message" placeholder='Your Message' required></textarea>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;
