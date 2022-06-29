import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";

const Card = ({ token }) => {
  return (
    <Col
      xl="2"
      lg="3"
      md="6"
      sm="1"
      className="d-flex justify-content-center align-items-center text-danger py-3"
    >
      <div className="token-card d-flex justify-content-center align-items-center">
        {token}
      </div>
    </Col>
  );
};

function App() {
  const [tokens, setTokens] = React.useState([]);

  setInterval(() => window.location.reload(), 10000);

  React.useEffect(() => {
    fetch(process.env.REACT_APP_BASE_URL + "/token/open", {
      method: "GET",
    }).then((res) => {
      if (res.status === 200) res.json().then((data) => setTokens(data));
      else return alert("Something went wrong! Please try again.");
    });
  }, []);

  return (
    <div className="token-canvas">
      <div className="nav-title-bar d-flex align-items-center">
        <img src={require("./assets/images/logo-light.png")} alt="logo" />
        <p className="fs-4 text-light my-0 ms-3 fw-light">6 Cups Cafe</p>
      </div>
      <Row className="p-3 w-100">
        {tokens.map((data, index) => (
          <Card key={index} token={data.token} />
        ))}
      </Row>
    </div>
  );
}

export default App;
