import '../Navbar/style.css'
const Navbar = ({ logo, menuList }) => {
  return (
    <nav className="navbar">
    {/* Logo */}
    <img src={logo} alt="logo" className="navbar-logo" />

    {/* Navigation Links */}
    <div className="navbar-menu">
        <ul className={`navbar-list`}>
          {menuList.map((menu, index) => (
           <li className="navbar-item">
              <a to="/" className="navbar-link">{ menu }</a>
          </li>    
        ))}  
           
      </ul>
    </div>

    {/* Mobile Menu Button */}
    <div className="navbar-toggle">
      <button className="navbar-toggle-button">
        <svg className="navbar-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>
  );
};

export default Navbar;