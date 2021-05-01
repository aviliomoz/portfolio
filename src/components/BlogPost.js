import React, { useEffect, useState } from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { useParams } from 'react-router';
import { getArticleBySlug, getArticleContent } from '../utils/fetch';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import moment from 'moment';

import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ className, children }) => {
  return (
    <div className="code-block">
      <div className="code-block__header">
        <div className="code-block__header--circle1"></div>
        <div className="code-block__header--circle2"></div>
        <div className="code-block__header--circle3"></div>
      </div>
      <SyntaxHighlighter style={tomorrow} language={className.substr(9)}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export const BlogPost = () => {
  const { slug } = useParams();

  const [activePost, setActivePost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getArticleBySlug(slug).then((article) => setActivePost(article));
    getArticleContent(slug).then((content) => setContent(content));
  }, [slug]);

  // Loading
  if (activePost === null) {
    return <div></div>;
  }

  if (activePost === undefined) {
    return (
      <div className="error-404">Error 404... Este artículo no existe.</div>
    );
  }

  return (
    <div className="blog-post">
      <h2>{activePost.title}</h2>
      <p>{activePost.description}</p>
      <div className="blog-post-time">
        <span>{`${activePost.date} - (${moment(
          activePost.date,
          'DD/MM/YYYY',
        ).fromNow()})`}</span>
        <BiShareAlt />
      </div>

      <article>
        <ReactMarkdown children={content} components={{ code: CodeBlock }} />
      </article>

      <iframe title={activePost.title} src={activePost.demo} />
    </div>
  );
};
