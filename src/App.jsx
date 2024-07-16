import './App.css';
import Companies from './Components/Companies/Companies';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import GetStarted from './Components/getStarted/GetStarted';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Residencies from './Components/Residencies/Residencies';
import Value from './Components/Value/Value';


function App() {
 return <>
 <div className="App">
  <Header/>
  <Hero/>
  <Companies/>
  <Residencies/>
  <Value/>
  <Contact/>
  <GetStarted/>
  <Footer/>
 </div>
 </>
}

export default App;
