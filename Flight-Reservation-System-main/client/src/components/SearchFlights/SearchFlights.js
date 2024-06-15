import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./SearchFlights.css";

const SearchFlights = () => {
  const [searchSource, setSearchSource] = useState("");
  const [searchDest, setSearchDest] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleBooking = (flight) => {
    navigate("/booking", { state: { ...flight } });
  };

  useEffect(() => {
    fetch("http://localhost:4003/getallflights")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setFlights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching flights: ", err);
        setLoading(false);
      });
  }, []);

  const filteredFlights = flights.filter((flight) => {
    if (searchSource && searchDest) {
      return (
        flight.sourceLocation === searchSource &&
        flight.destLocation === searchDest
      );
    } else if (searchSource) {
      return flight.sourceLocation === searchSource;
    } else if (searchDest) {
      return flight.destLocation === searchDest;
    } else {
      return true;
    }
  });

  return (
    <Container>
      <NavBar />
      <Row className="mt-5">
        <Col className="col-6">
          <Form.Select
            value={searchSource}
            onChange={(e) => setSearchSource(e.target.value)}
          >
            <option value="">Search Source</option>
           <option value="Vishakapatnam ">Vishakapatnam </option>

                <option value="Guwahati">Guwahati</option>

                <option value="Chennai ">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Varanasi">Varanasi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Kolkata ">Kolkata</option>
          </Form.Select>
        </Col>
        <Col className="col-6">
          <Form.Select
            value={searchDest}
            onChange={(e) => setSearchDest(e.target.value)}
          >
            <option value="">Search Destination</option>
          <option value="Bengaluru">Bengaluru</option>

              <option value="Guwahati">Guwahati</option>

              <option value="Chennai ">Chennai</option>

              <option value="Vishakapatnam ">Vishakapatnam </option>

              <option value="Varanasi">Varanasi</option>
              <option value="Delhi">Delhi</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kolkata ">Kolkata</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="container mt-5">
            {loading ? (
              <p>Loading flights...</p>
            ) : (
              filteredFlights.map((flight) => (
                <div key={flight.flightNo} className="row view-flight-box mt-4 p-3">
                  <div className="col-4">
                    <div>
                      <div className="locations bg-white">
                        <b>{flight.sourceLocation}</b> to{" "}
                        <b>{flight.destLocation}</b>
                      </div>
                      <p>
                        Departure date: {flight.startDate} <br />
                        Departure time: {flight.startTime}
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      <div>Flight No: {flight.flightNo}</div>
                      <p style={{ color: "red" }}>
                        Seats available: {flight.seats - flight.noOfPassengers}
                      </p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="price-outer-div">
                      <div className="price">
                        Price starting from: <b>${flight.economyPrice}</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <Button
                      onClick={() => handleBooking(flight)}
                      className="btn btn-danger btn-lg w-75"
                    >
                      Book
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchFlights;
