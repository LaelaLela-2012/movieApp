import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

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
    setPaginationno(data.total_pages);
  };

  // useEffect(() => {
  //   GetDataTrending();
  // }, []);

  useEffect(() => {
    // console.log("Trending Component did mount");
    GetDataTrending();
  }, [pageno]);

  const handleClick = (number) => {
    setPageno(number);
  };

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <h1 className="txtCenter">Top Trending</h1>
            <h3 className="txtCenter">TV and Movie for you</h3>
          </Col>
          {content && content.length > 0
            ? content.map((item) => {
                return (
                  <CardMoviesComponents
                    key={item.id}
                    data={item}
                    mediaType="tv"
                  />
                );
              })
            : "Loading Content ..."}
          {paginationno && paginationno > 1 ? (
            <PaginationComponent
              maxnum={paginationno}
              activenum={pageno}
              handleClick={handleClick}
            />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
