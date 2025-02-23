import Navbar from "./components/Navbar"
import logoIcon from "./assets/img/logo-3.png"; 
import Footer from "./components/Footer";
import Content from "./components/ContactSection";
import bgImage from "./assets/img/bg-image.svg"
import ContactSection from "./components/ContactSection";

function App() {
  const logo = logoIcon
  const background = bgImage
  const menuList = ['Home', 'Menu', 'Gallery', 'Bite n Brew', 'Contact Us']
  return (
    <>
      <Navbar logo={ logo } menuList={ menuList } />
      <ContactSection background={ background } />
      <Footer logo={logoIcon} />      
    </>
  )
}

export default App
