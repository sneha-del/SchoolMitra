import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AddFeature from './components/AddFeature';
import Admin from './components/Admin';
import Feature from "./components/Feature";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Admin} exact/>
        <Route path="/add-features" component={AddFeature} exact/>
        <Route path="/features" component={Feature} exact/>

      </Switch>
      </BrowserRouter>
    
    </div>
      
  );
}

export default App;
