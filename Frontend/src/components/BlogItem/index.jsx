import React from "react";
import PropTypes from "prop-types";

import BlogItemText from "../BlogItemText";

import "../../App.css";
import "./index.css";


export default function BlogItem({
  index,
  blogPost,
  imageOrientation,
}) {
if (imageOrientation === "top") {
    return (
      <div key={index} className="card-1">
        <img src={blogPost.image} className="card-img-top" alt="..." />
        <div className="card-text-bottom">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
          ></BlogItemText>
        </div>
      </div>
    );
  } else {
    return (
      <div key={index} className="card-2">
        <img src={blogPost.image} className="card-img-left" alt="..." />
        <div className="card-text-right">
          <BlogItemText
            blogPost={blogPost}
            headerFontSize="20px"
          ></BlogItemText>
        </div>
      </div>
    );
  }
}

BlogItem.propTypes = {
  index: PropTypes.number.isRequired,
  blogPost: PropTypes.object.isRequired,
  imageOrientation: PropTypes.string,
};
