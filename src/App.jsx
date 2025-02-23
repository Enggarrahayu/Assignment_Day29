import Navbar from "./components/Navbar"
import logoIcon from "./assets/img/logo-3.png"; 

function App() {
  const logo = logoIcon
  const menuList = ['Home', 'Menu', 'Gallery', 'Bite n Brew', 'Contact Us']
  return (
    <>
      <Navbar logo = { logo } menuList = {menuList} />
    </>
  )
}

export default App
