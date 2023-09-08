import logo from "./assets/zapay-logo.png"
import globeIcon from "./assets/globe-icon.svg"
import './App.css'

function App() {

  return (
    <>
      <header className="py-5">
        <nav className="container mx-auto flex justify-between items-center px-3">
          <div className="flex items-center">
            <a href="#" className="mr-8">
              <img src={logo} alt="Zapay Logo" />
            </a>
            <ul className="flex items-center space-x-2">
              <li className="pt-2 font-medium"><a href="#">Home</a></li>
              <li className="pt-2 font-medium"><a href="#">Products</a></li>
              <li className="pt-2 font-medium"><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex">
              <img width="15" height="15" src={globeIcon} alt="World" />
              <select className="bg-transparent border-0 border-none outline-0 outline-none text-sm">
                <option className="bg-[#FBF6F2] hover:text-black" value="english" selected>EN</option>
                <option className="bg-[#FBF6F2] hover:text-black" value="french">FR</option>
                <option className="bg-[#FBF6F2] hover:text-black" value="deutsche">DE</option>
              </select>
            </div>
              <button className="font-medium">Login</button>
              <button className="text-bgWhite font-medium bg-zapayGreen py-2 px-4 border hover:shadow-md" style={{borderRadius: "0.25rem 1rem 0.25rem 0.25rem"}}>Get Started</button>
            </div>
        </nav>
      </header>
    </>
  )
}

export default App
