import logo from "./assets/zapay-logo.png"
import logoWhite from "./assets/zapay-logo-white.png"
import globeIcon from "./assets/globe-icon.svg"
import smilingMan from "./assets/smiling-man-with-phone.png"
import playIcon from "./assets/play-icon.svg"
import manImg1 from "./assets/man-1.png"
import manImg2 from "./assets/man-2.png"
import girlImg1 from "./assets/girl-1.png"
import girlImg2 from "./assets/girl-2.png"
import applePayLogo from "./assets/applePay-logo.svg"
import paykasaLogo from "./assets/paykasa-logo.svg"
import bankMusactLogo from "./assets/bankMuscat-logo.svg"
import moneyImg from "./assets/money.png"
import graphImg from "./assets/graph.png"
import cartIcon from "./assets/cart.svg"
import './App.css'
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // const imageUrls =[]
    // const imagePromises = imageUrls.map((url) => {
    //   return new Promise((resolve, reject) => {
    //     const img = new Image();
    //     img.src = url;
    //     img.onload = resolve;
    //     img.onerror = reject;
    //   });
    // });

    // Promise.all(imagePromises)
    //   .then(() => {
    //     setImagesLoaded(true);
    //   })
    //   .catch((error) => {
    //     console.error('Error preloading images:', error);
    //   });
  }, []);

  return (
    <>
      <div className="fixed hidden top-0 left-0 w-full min-h-[100vh] z-[10000] md:flex justify-center items-center animate-[hide_1s_1.2s_ease-in-out_forwards]">
        <div className="w-1/2 bg-zapayGreen h-[100vh] animate-[slideDown_1s_ease-in-out_forwards]"></div>
        <div className="w-1/2 bg-zapayGreen  h-[100vh] animate-[slideUp_1s_ease-in-out_forwards]"></div>
        <img className="absolute hidden md:flex animate-[hide_0.5s_0.4s_ease-in-out_forwards]" src={logoWhite} alt="Zapay Logo" />
      </div>
      <header className="py-2 md:py-5 bg-bgWhite translate-y-[-100%] animate-[slideDown_0.5s_1.1s_ease_forwards]" style={{animationTimingFunction: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'}}>
        <nav className="container mx-auto flex justify-between items-center px-3">
          <div className="flex items-center">
            <a href="#" className="mr-8">
              <img src={logo} alt="Zapay Logo" />
            </a>
            <ul className="hidden md:flex items-center space-x-2">
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
              <button className="text-bgWhite font-medium bg-zapayGreen p-3 md:py-2 md:px-4 hover:shadow-md" style={{borderRadius: "0.25rem 1rem 0.25rem 0.25rem"}}>Get Started</button>
            </div>
        </nav>
      </header>
      <main>
        <section className="py-5 bg-bgWhite"> 
          <div className="container mx-auto px-3">
            <div className="flex flex-col gap-12 md:flex-row">
              <div className="flex flex-col justify-between items-center w-full md:w-[40%] pt-10 pb-5">
                <div className="text-[#202626] mb-10 text-center md:text-left">
                    <h1 className="font-semibold leading-[1] text-5xl md:text-6xl mb-4 animate-fadeInLeft">Better Money solution for your everyday needs</h1>
                    <p className="text-lg mb-4 animate-fadeInLeft">Seamless Life changing Financial solutions for traders and business owners across the middle-east</p>
                    <div className="flex md:justify-start justify-center items-center space-x-4">
                      <a className="text-bgWhite font-medium bg-zapayGreen py-2 px-4 rounded-md cursor-pointer hover:scale-95 hover:shadow-md">Get Started</a>
                      <a className="flex items-center text-[#202626] font-medium bg-[#F9E6D2] py-2 px-4 rounded-md cursor-pointer hover:scale-95 hover:shadow-md"><img className="mr-1" src={playIcon} alt="" />How it works</a>
                    </div>
                </div>
                <div className="w-auto md:w-full">
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex overflow-hidden bg-[#804FBF] border-2 border-zapayGreen rounded-full -ml-2 animate-fadeInLeft">
                      <img src={manImg1} alt="" />
                    </div>
                    <div className="w-12 h-12 flex overflow-hidden bg-[#EFC169] border-zapayGreen rounded-full -ml-2 animate-fadeInLeft" style={{animationDelay: '1.8s'}}>
                      <img src={girlImg1} alt="" />
                    </div>
                    <div className="w-12 h-12 flex overflow-hidden bg-[#56BDDD] border-2 border-zapayGreen rounded-full -ml-2 animate-fadeInLeft" style={{animationDelay: '2s'}}>
                      <img src={manImg2} alt="" />
                    </div>
                    <div className="w-12 h-12 flex overflow-hidden bg-[#FFCAD4] border-2 border-zapayGreen rounded-full -ml-2 animate-fadeInLeft" style={{animationDelay: '2.2s'}}>
                      <img src={girlImg2} alt="" />
                    </div>
                    <div className="w-12 h-12 flex justify-center items-center overflow-hidden bg-[#F9E5D2] border-2 border-zapayGreen rounded-full -ml-2 animate-fadeInLeft" style={{animationDelay: '2.5s'}}>
                      <span className="text-zapayGreen text-lg font-semibold">+5M</span>
                    </div>
                  </div>
                  <p className="text-[#C7C0BB] animate-fadeInUp">registered merchants globally</p>
                </div>
              </div>
                <div className="w-full md:w-[60%] hidden md:flex  items-center relative pl-[3.2rem] translate-x-[20%] bg-[#E9E6E0] rounded-l-[5rem] before:absolute before:content-[''] before:top-0 before:left-4 before:bg-[url('/src/assets/hero-right-pattern.png')] before:w-full before:h-full before:-z-1">
                  <img className="h-[400px] z-10 flex self-end" src={smilingMan} alt="Man using Zapay" />
                  <div className="p-2 flex justify-center items-center absolute bottom-[22%] right-[52%] rounded-lg gap-2 z-20 backdrop-blur-sm animate-fadeInRight" style={{background: 'linear-gradient(99deg, rgba(250, 253, 253, 0.45) 27.81%, rgba(250, 253, 253, 0.40) 88.68%)', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.10)'}}>
                    <img className="w-10 h-10" src={graphImg} alt="" />
                    <div className="">
                      <p className="text-md font-semibold">$17,000</p>
                      <p className="text-xs font-medium">Total Earnings</p>
                    </div>
                  </div>
                  <div className="p-2 absolute bottom-[5%] left-[10%] rounded-lg gap-2 z-20 backdrop-blur-sm animate-fadeInUp" style={{background: 'linear-gradient(99deg, rgba(250, 253, 253, 0.45) 27.81%, rgba(250, 253, 253, 0.40) 88.68%)', boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.10)'}}>
                      <div className="flex justify-center items-center gap-2">
                          <div className="p-1 bg-white rounded-md">
                            <img className="w-4 h-4" src={cartIcon} alt="" /> 
                          </div>
                          <p className="text-xs font-semibold">Point of sale</p>
                      </div>
                      <div className="">
                        <p className="font-semibold">$23,184 <span className="font-normal">USD</span> </p>
                        <p className="text-gray-500 text-[10px]">+26.71% increase</p>
                      </div>
                  </div>
                  <div className="p-3 flex justify-center items-center absolute bottom-[30%] left-[-80px] rounded-lg gap-2 z-20 backdrop-blur-sm bg-[rgba(250, 253, 253, 0.60)] animate-fadeInLeft" style={{boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.10)'}}>
                    <img className="w-5 h-5" src={moneyImg} alt="" />
                      <p className="text-xs font-semibold">Receive Payments Globally</p>
                  </div>
                </div>     
            </div>
          </div>
        </section>
        <div className="container mx-auto px-3 mt-5 md:mb-5 space-x-5">
          <div className="flex flex-col md:flex-row justify-around items-center p-7" style={{background: 'linear-gradient(90deg, rgba(232, 230, 224, 0.00) -3.95%, #E8E6E0 49.03%, rgba(232, 230, 224, 0.00) 99.95%)'}}>
            <p className="font-medium max-w-[150px] animate-fadeInUp">We are trusted by reliable partners</p>
            <img src={applePayLogo} alt="" />
            <img src={paykasaLogo} alt="" />
            <img src={bankMusactLogo} alt="" />
          </div>
          
        </div>
      </main>
    </>
  )
}

export default App
