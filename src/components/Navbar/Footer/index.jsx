import './style.css'; 

const Footer = ({ logo }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <iframe
            className="footer-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450931!2d144.95373531531692!3d-37.81627917975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce720!2sMelbourne%2C+Victoria%2C+Australia!5e0!3m2!1sen!2s!4v1636622977773!5m2!1sen!2s"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="footer-grid">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <span className="footer-copy">
              &copy; 2025 BITE 'N BREW CAFE AND RESTO, All Rights Reserved
            </span>
          </div>
          <div className="footer-info">
            <h2>BITE N BREW CAFE AND RESTO</h2>
            <span>
              11920 S Texas 6 #600, Sugar Land, Houston TX 77498, United States
              <br />
              Phone: +1 832 532 1010
              <br />
              Email: admin@bitenbrew.com
            </span>
          </div>
          <div className="footer-info">
            <h2>OPERATIONAL HOURS</h2>
            <span>Monday - Thursday: 11:00AM - 11:00PM</span>
            <span>Friday: 11:00AM - 1:00PM</span>
            <span>Saturday: 10:00AM - 1:00PM</span>
            <span>Sunday: 10:00AM - 11:00PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
