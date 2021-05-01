import React, { useEffect, useState } from 'react';
import { BlogCard } from '../components/BlogCard';
import { getArticles } from '../utils/fetch';

export const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => setPosts(articles));
  }, []);

  return (
    <section className="blog-section">
      <div className="blog-section-header">
        <h3>Blog</h3>
      </div>
      <div className="blog-section-content">
        {posts.map((post) => {
          return <BlogCard key={post.title} post={post} />;
        })}
      </div>
    </section>
  );
};
