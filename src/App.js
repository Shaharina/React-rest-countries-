import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <div className='background'>
                <h1 className='header'>REACT R E S T COUNTRIES</h1>
            </div>
            <Countries></Countries>
            <Footer></Footer>
        </div>
    );
}

export default App;
