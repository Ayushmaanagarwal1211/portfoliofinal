import './App.css';
import Navigationbar from './components/Navigationbar';
import Into from './components/Into'
import Contact from './components/Contact';
function App() {

  return (
<>
{/* navigation bar */}
<div className=' w-[99.9vw] overflow-hidden bg-black'>

   <Navigationbar />

<Into />
{/* <Black /> */}
<Contact />
  </div>

</>
  );
}

export default App;
