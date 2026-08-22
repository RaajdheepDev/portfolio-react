function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" id="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;