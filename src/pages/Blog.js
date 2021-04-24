import React from 'react';
import { BlogPost } from '../components/BlogPost';
import { BlogLayout } from '../layouts/BlogLayout';

export const Blog = () => {
  return (
    <BlogLayout>
      <BlogPost />
    </BlogLayout>
  );
};
