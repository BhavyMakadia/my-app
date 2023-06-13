
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";

function App() {
 //    const [alert, setAlert] = useState(null);
  
  /*  const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }*/
/*const 
    const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
       // showAlert("Dark mode has been enabled", "success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        //showAlert("Light mode has been enabled", "success");
      }
    }*/
  return (

    <Router>

<Navbar /*title="bhavytextutils" mode={mode} toggleMode={toggleMode}*/ aboutText="About Textutils" />
<div className="container my-4"  >
        <Switch>
              <Route exact path="/about">
                <About />
                </Route>

          <Route exact path="/">
              <Textforms heading="Try TextUtils - word counter, character counter, remove extra spaces" title="Enter a data in form of text:-"/>
          </Route>
    </Switch>
</div>    
    </Router>
    

  );
}

export default App;
