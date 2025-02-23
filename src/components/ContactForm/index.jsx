import { Button, TextField } from "@mui/material";
import "./style.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <form className="mt-10 space-y-6">
        {/* Name */}
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          placeholder="Enter your name"
        />

        {/* Email */}
        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          placeholder="Enter your email"
        />

        {/* Phone Number */}
        <TextField
          fullWidth
          type="tel"
          label="Phone Number"
          variant="outlined"
          placeholder="Enter your phone number"
        />

        {/* Message */}
        <TextField
          fullWidth
          multiline
          rows={6}
          label="Message"
          variant="outlined"
          placeholder="Enter your message"
        />

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button variant="contained" type="submit" className="contact-form-button">
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
