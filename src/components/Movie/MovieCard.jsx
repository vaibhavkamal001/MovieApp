import React from "react";
import ApplicationConstant from "../../applicationConstant/ApplicationConstant";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { imageUrl } = ApplicationConstant;
  return (
    <Link to={`../movie/${props.details.id}`}>
      <div className="cursor-pointer w-[100px] my-4 md:w-[220px] lg:w-[250px]">
        <img
          src={imageUrl + props.details.poster_path}
          alt={props.details.title}
        />
      </div>
    </Link>
  );
}
