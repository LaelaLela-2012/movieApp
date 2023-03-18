import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./details.css";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

import { img_300, img_not_available } from "../../Config";

const DetailsContainer = () => {
  const params = useParams();
  // console.log("params", params);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const [credits, setCredits] = useState();

  const id = params.movieid || "";
  const _media_type = params.mediatype || "";

  // const API_KEY = `(${process.env.REACT_APP_NOT_SECRET_CODE})`;
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${_media_type}/${id}?api_key=f4c288dd673ca91e667149ed4b62d865&language=en-US`
      );
      setContent(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVideo = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${_media_type}/${id}/videos?api_key=f4c288dd673ca91e667149ed4b62d865&language=en-US`
      );
      setVideo(data.results[0]?.key);
      //console.log('fetchVideo',  data);
    } catch (error) {
      console.error(error);
    }
  };

  const creditsFetch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${_media_type}/${id}/credits?api_key=f4c288dd673ca91e667149ed4b62d865&language=en-US`
      );
      setCredits(data.cast);
      // console.log("sdata", data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    creditsFetch();
  }, []);

  return (
    <>
      <h1>Details Container</h1>
    </>
  );
};

export default DetailsContainer;
