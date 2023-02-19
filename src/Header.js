import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  const logOut = () => {
    localStorage.clear();
    history.push("/register");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ecomm</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/">Products List</Link>
                <Link to="/add">Add Products</Link>
                {/* <Link to="/update">Update Product</Link> */}
                <Link to="/search">Search Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
