export default function NavBar() {
  return (
    <div>
      <section className="header">
        <nav className="topnav">
          <img src="./public/images/logo.svg" alt="logo"></img>
          <ul className="left-nav">
            <li>
              Features
              <button type="button" className="btn-dropdown">
                <img
                  className="dropdown-arrow"
                  src="./public/images/icon-arrow-down.svg"
                  alt="arrow-icon"
                />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <img
                      src="./public/images/icon-todo.svg"
                      alt="todo icon"
                    ></img>
                    Todo List
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="./publc/images/icon-calendar.svg"
                      alt="calender icon"
                    ></img>
                    Calender
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./public/images/icon-reminders.svg"></img>
                    Reminders
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="./public/images/icon-planning.svg"
                      alt="planning icon"
                    ></img>
                    Planning
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Company
              <button type="button" className="btn-dropdown">
                <img
                  className="dropdown-arrow"
                  src="./public/images/icon-arrow-down.svg"
                  alt="arrow-icon"
                ></img>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">History</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>

          <ul className="right-nav">
            <li>
              <a href="#">Login</a>
            </li>
            <li className="register">
              <a href="">Register</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
