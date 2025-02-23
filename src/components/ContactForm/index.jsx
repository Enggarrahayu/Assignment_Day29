import "./style.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="mt-10 space-y-6">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="contact-form-label">Name</label>
          <input type="text" id="name" placeholder="Enter your name" className="contact-form-input" />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="contact-form-label">Email</label>
          <input type="email" id="email" placeholder="Enter your email" className="contact-form-input" />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="contact-form-label">Phone Number</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" className="contact-form-input" />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="contact-form-label">Message</label>
          <textarea id="message" rows="6" className="contact-form-input"></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="contact-form-button">SEND</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
