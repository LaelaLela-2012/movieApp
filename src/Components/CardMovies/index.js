import React from "react";
import { Link } from "react-router-dom";
import { img_300, img_not_available } from '../../Config';

const CardMoviesComponents = ({ data, mediaType }) => {
    console.log('data', data)
    const id = data.id;
    const media_type = data.media_type
      ? data.media_type
      : data.type
      ? data.type
            : mediaType;
    const ImageURL = data.poster_path
      ? img_300 + data.poster_path
      : img_not_available;
    const title = data.original_title || data.name;

    return (
        <>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
                <Link to={`/details/${id}/${media_type}`}>
                    <figure className="">
                        <span>
                            <img src={ImageURL} alt={title} />
                        </span>
                    </figure>
               </Link>
            </div>
        </>
  )
};

export default CardMoviesComponents;
