import logo from "./assets/zapay-logo.png"
import globeIcon from "./assets/globe-icon.svg"
import smilingMan from "./assets/smiling-man-with-phone.png"
import playIcon from "./assets/play-icon.svg"
import './App.css'

function App() {

  return (
    <>
      <header className="py-5 bg-bgWhite">
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
              <button className="text-bgWhite font-medium bg-zapayGreen py-2 px-4 hover:shadow-md" style={{borderRadius: "0.25rem 1rem 0.25rem 0.25rem"}}>Get Started</button>
            </div>
        </nav>
      </header>
      <main>
        <section className="py-5 bg-bgWhite"> 
          <div className="container mx-auto px-3">
            <div className="flex gap-6">
              <div className="flex flex-col justify-between items-center w-[40%] pt-20">
                <div className="text-[#202626]">
                    <h1 className="font-semibold leading-[1] text-6xl mb-4
                    ">Better Money solution for your everyday needs</h1>
                    <p className="text-lg mb-4">Seamless Life changing Financial solutions for traders and business owners across the middle-east</p>
                    <div className="flex justify-start items-center space-x-4">
                      <a className="text-bgWhite font-medium bg-zapayGreen py-2 px-4 rounded-md cursor-pointer hover:shadow-md">Get Started</a>
                      <a className="flex items-center text-[#202626] font-medium bg-[#F9E6D2] py-2 px-4 rounded-md cursor-pointer hover:shadow-md"><img className="mr-1" src={playIcon} alt="" />How it works</a>
                    </div>
                </div>
              </div>
              <div className="w-[60%]">
                <img src={smilingMan} alt="" />
              </div>
        
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
