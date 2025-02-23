import ContactForm from "../ContactForm";
import ContactInformation from "../ContactInformation";
import "./style.css";

const ContactSection = ({ background }) => {
  return (
    <>
      <div className="bg-center bg-cover min-h-screen" style={{ backgroundImage: `url(${background})` }}>
        <h2 className="contact-heading mx-10 pt-24 mb-5">Contact Us</h2>
        <p className="contact-text">
          Got questions or comments? Just send us a message!
        </p>
        <div class="grid grid-cols-1 mt-8 md:grid-cols-2 p-8">
          <ContactInformation />
          <ContactForm/>
        </div>
      </div>
      
    </>
  );
};

export default ContactSection;
