import { Container, Row, Col } from "react-bootstrap";
import AddFlightBtn from "./components/AddFlightBtn";
import FlightDetails from "./components/FlightDetails";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { state } = useLocation();
  const { adminId } = state; // Read values passed on state
  return (
    <Container>
         <nav className="navbar navbar-expand-lg navbar-light ">
         <a className="navbar-brand" href="/">
            <span className="fast">INDIAN </span>{" "}
            <span className="airlines">AIRLINES</span>
        </a>
      </nav>  
      <hr/>
       <h4 className="text-center text-danger mt-2">Welcome to {adminId} Dashboard! </h4>
      <Row className="mt-5">
        <Col>
          <AddFlightBtn />
          <a href="/adminlogin" className="btn btn-danger" style={{marginLeft:"10px"}}>Log out</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <FlightDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
