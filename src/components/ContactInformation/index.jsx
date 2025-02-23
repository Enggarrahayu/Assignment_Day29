import "./style.css";
import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";

const ContactInformation = () => {
  return (
  <div className="contact-info p-8">
      <h3 className="contact-title">Contact Information</h3>
      <p className="contact-description">
        If you have any questions or concerns, you can contact us by filling out the contact form, calling us,
        visiting our office, finding us on other social networks, or sending us a personal email at:
      </p>
      <div className="contact-item">
        <span> <FaPhone/> </span>
        <span>+18325321010</span>
      </div>
      <div className="contact-item">
        <span> <FaEnvelope/> </span>
        <span>admin@bitenbrew.com</span>
      </div>
      <div className="contact-item">
        <span> <FaMap/> </span>
        <span>11920 S Texas 6 # 600, Sugar Land, Houston TX 77498</span>
      </div>
  </div>
  );
};

export default ContactInformation;
