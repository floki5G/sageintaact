import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Body from './body';
import Footer from './footer';

function App() {
  return (
<>
<Navbar/>
<div className='body'>
  <Body/>
</div>
<Footer/>
</>
  );
}

export default App;
