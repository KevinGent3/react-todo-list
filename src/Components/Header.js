import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <header className="container">
      <FontAwesomeIcon className="icon" icon="list-check" />
      <h1>Todo List</h1>
    </header>
  );
};
export default Header;
