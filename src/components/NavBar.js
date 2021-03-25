import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div class="container">
          <Link to="/" className="navbar-brand">
            Contact Book
          </Link>
          <div>
            <Link to="contacts/add" className="btn btn-light ml-auto">
              Create Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
