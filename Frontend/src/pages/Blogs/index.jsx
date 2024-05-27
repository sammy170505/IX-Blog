import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import "../../App.css";
import "./index.css";

const data = require("../../dummy-data.json");
let blogPosts = data.blogPosts;
const categories = data.categories;

export default function BlogsPage() {
  const { categoryId: categoryIdParam } = useParams();
  const [categoryId, setCategoryId] = useState(categoryIdParam || undefined);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    // Filtering blogPosts based on the categoryId.
    const blogs = blogPosts.filter((x) =>
      categoryId !== undefined
        ? x.categories.find((y) => y.id.toString() === categoryId.toString())
        : true
    );
    setBlogs(() => blogs);
  }, [categoryId]);
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          {categories.map((category, index) => {
            return categoryId === category.id.toString() ? (
              <button
                key={index}
                onClick={() => setCategoryId(category.id)}
                style={{ color: "blue" }}
              >
                <p key={index}>{category.title}</p>
              </button>
            ) : (
              <button
                key={index}
                onClick={() => setCategoryId(category.id)}
                style={{ color: "black" }}
              >
                <p key={index}>{category.title}</p>
              </button>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList setBlog={() => {}} blogPosts={blogs} />
      </div>
      <Footer />
    </>
  );
}