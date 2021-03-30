import { Provider } from "react-redux";
import { Contact } from "./components/contacts/Contact";
import { NavBar } from "./components/NavBar";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { AddContact } from "./components/contacts/AddContact";
import { EditContact } from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router basename="/">
        <div className="App">
          <NavBar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contact} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
