import './App.css';
import Test from  './home';
import About from  './about';
import Profile from './profile'
import Props from './props'
function App() {
  return (
    <div className="App">
      <Test/>
      <Profile text={{name:'Suraj'}} data="Profile Data "/>
      <Props text={{name:'Suraj'}} data="Profile Data "/>
      <About/>
    </div>

  );
}

export default App;