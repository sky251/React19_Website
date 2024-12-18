export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            className="form-control"
            type="text"
            required
            autoComplete="off"
            name="userName"
            placeholder="Enter Your Name"
          />
          <input
            className="form-control"
            type="email"
            required
            autoComplete="off"
            name="userEmail"
            placeholder="Enter Your Email"
          />
          <textarea
            className="form-control"
            name="message"
            rows="10"
            placeholder="Enter Your Message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
