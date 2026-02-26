import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div>PortFolio</div>
      <ul className="unOrderedLIst">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Help</a>
        </li>
      </ul>
      <input type="search" />
    </div>
  );
};

export default Header;
