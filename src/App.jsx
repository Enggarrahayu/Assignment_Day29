import Navbar from "./components/Navbar"
import logoIcon from "./assets/img/logo-3.png"; 
import Footer from "./components/Footer";

function App() {
  const logo = logoIcon
  const menuList = ['Home', 'Menu', 'Gallery', 'Bite n Brew', 'Contact Us']
  return (
    <>
      <Navbar logo={logo} menuList={menuList} />
      <Footer logo={ logoIcon } />
    </>
  )
}

export default App
