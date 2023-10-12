import logoImage from "../../assets/logo.png";

function Header() {
  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top py-3"
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={logoImage} alt="" height={50} />
        </a>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
      </div>
    </header>
  );
}

export default Header;
