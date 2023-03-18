import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);

  // const API_KEY = `(${process.env.REACT_APP_NOT_SECRET_CODE})`;

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=f4c288dd673ca91e667149ed4b62d865&page=${pageno}`
    );
    setContent(data.results);
    console.log("data", data);
  };
  useEffect(() => {
    GetDataTrending();
  }, []);
  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <h1>Home page container</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
