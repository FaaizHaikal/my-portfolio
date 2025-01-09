import { useRef, useState } from 'react';
import './ContactPage.css';
import emailjs from '@emailjs/browser';
import UserLog from '../components/UserLog';

function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const [logMessage, setLogMessage] = useState('');

  const clearLog = () => setLogMessage('');

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    const templateParams = {
      from_name: form.current['Name'].value,
      from_email: form.current['Email'].value,
      message: form.current['Message'].value,
    };

    emailjs
      .send(
        'my-portfolio-service',
        'my-portfolio-template',
        templateParams,
        'VvsaSfYHScA9fO30t'
      )

      .then(() => {
        form.current?.reset();
        setLogMessage('Thank you! I will reply as soon as possible.');
      })
      .catch((error) => {
        console.error('Error sending email', error);
        setLogMessage('Sorry :( Email service is currently unavailable');
      });
  };

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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Name" placeholder="Your Name" required />
          <input type="email" name="Email" placeholder="Your Email" required />
          <textarea
            name="Message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">
            Send Email <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <UserLog message={logMessage} duration={3} clearLog={clearLog} />
    </section>
  );
}

export default ContactPage;
