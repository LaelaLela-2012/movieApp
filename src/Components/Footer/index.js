import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

const FooterComponent = () => {
  return (
    <>
      <footer className="myFooter">
        <Container>
          <Row>
            <Col className="col-12">
              <div className="footerCopyright">
                <small>Developed and Designed by Laela</small>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterComponent;
