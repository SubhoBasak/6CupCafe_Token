import React from "react";
import { Col, Row } from "react-bootstrap";
import "./App.css";

const Card = ({ token }) => {
  return (
    <Col
      xl="3"
      lg="4"
      md="6"
      sm="1"
      className="d-flex justify-content-center align-items-center py-3"
    >
      <div className="token-card d-flex flex-column justify-content-center align-items-center">
        <div className="w-100 d-flex justify-content-start py-0 px-5 my-0">
          <span className="fs-5 text-light">Token -</span>
        </div>
        <p className="my-0 py-0">{token}</p>
        <div className="my-0 py-0 w-100 d-flex justify-content-end">
          <img src={require("./assets/images/logo.png")} alt="logo" />
        </div>
      </div>
    </Col>
  );
};

function App() {
  const [tokens, setTokens] = React.useState([]);

  setInterval(() => window.location.reload(), 5000);

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
      <Row className="p-3 w-100">
        {tokens.map((data, index) => (
          <Card key={index} token={data.token.toString().padStart(3, "0")} />
        ))}
      </Row>
    </div>
  );
}

export default App;
