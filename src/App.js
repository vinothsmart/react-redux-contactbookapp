import { Provider } from "react-redux";
import { Contact } from "./components/contacts/Contact";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
