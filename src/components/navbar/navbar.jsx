import { BsMenuButtonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
        <nav class="navbar navbar-expand-lg px-2 py-4">
          <div class="container-fluid">
            <span class="navbar-brand" >
              <Link to="/">
                Caleb.
              </Link>
            </span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BsMenuButtonFill/>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#projects">
                    Projects
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    ...
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" target="_blank" href="Resume">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Navbar;
