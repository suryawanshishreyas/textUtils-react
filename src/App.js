import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title ="Web Page" aboutText = "About Text Utils" />
      <div className='container'>
        <TextForm heading ='Enter the text below to analyze below'/>
      </div>
      
    </>
  );
}

export default App;
