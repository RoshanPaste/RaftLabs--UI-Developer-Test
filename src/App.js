import './App.css';
import NavInfo from "./Components/Navs/NavInfo"
import Footer from './Components/Footer/FooterMain'
import MainPage from './Components/Main/MainPage'
import "./Ref/profilePicture"


function App() {
  return (
    <div className='flex flex-wrap max-h-screen w-full'>
      <div 
        className='side-bar text-black bg-white h-screen w-1/6' 
        style={{borderRight:"1px solid #D9D9D9"}}
      >
        <NavInfo/>
      </div>

      <div 
        className='main-div h-screen w-7/12'
      >
        <MainPage />
      </div>

      <div 
        className='footer-div text-black h-screen w-3/12'
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;