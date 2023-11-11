import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Konten from './konten';


function Main() {
  return (
    <>
      <Navbar>
        <Container>
          <img src="./img/logo_stw.jpg" style={{ height: "80px" }}></img>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="body">
      <div className="header">
        
        <div className="bg" style={{ position: "relative" }}>
          <img src="./img/bg3.jpg" alt="" />
          
          <div
            style={{
              position: "absolute",
              maxWidth: "560px",
              top: "50%",
              left: "33%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              color: "white",
              textAlign: "left",
            }}
          >
            <div className="text-content">
              <h1 style={{ textAlign: "left" }}>NEW EPISODE!</h1>
            </div>

            <p style={{ textAlign: "left" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="cari" style={{ textAlign: "left" }}>
              <img src="./Images/logo.jpg" alt="logo" />
              <input
                type="search"
                placeholder="Search Here"
                className="search"
              />
            </div>
          </div>
          <div
            className="avt"
            style={{
              position: "absolute",
              top: "50%",
              left: "75%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <img
              src="./img/avatar1.png"
              alt=""
              style={{ height: "auto", width: "638px" }}
            />
          </div>
        </div>
      </div>
      <div className="content">
      <Konten />
      </div>
      <div className="c">dd</div>
      </div>
      
    </>
  );
}

export default Main;
