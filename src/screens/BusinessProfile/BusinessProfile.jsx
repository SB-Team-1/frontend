import React from "react";
import { useParams } from "react-router-dom";

export default function BusinessProfile(props) {
  const { businesses } = props;
  const params = useParams();

  // const business = businesses.filter((item) => item._id === params.id);

  return <div></div>;
}
