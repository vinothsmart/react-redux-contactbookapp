export const NavBar = () => {
  return (
    <div>
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
        <div class="container">
          <a class="navbar-brand" href="#">
            Contact Book
          </a>
          <div>
            <a className="btn btn-light ml-auto">Create Contact</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
