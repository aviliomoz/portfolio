import React from 'react';
import { Link } from 'react-router-dom';

export const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-header">
        <div className="blog-card-header-hover"></div>
        <Link to={`/blog/${post.slug}`}>
          <h4>{post.title}</h4>
        </Link>
      </div>
      <span>{post.date} - (Hace dos semanas)</span>
      <p>{post.description}</p>
    </div>
  );
};
