import { Provider } from "react-redux";
import { Contact } from "./components/contacts/Contact";
import { NavBar } from "./components/NavBar";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="py-3">
            <Contact />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
