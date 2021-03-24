import { Contact } from "./components/contacts/Contact";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="py-3">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
