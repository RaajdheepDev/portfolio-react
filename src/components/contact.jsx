function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <form id="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea rows="5"></textarea>
        </div>

        <button id="submit" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;