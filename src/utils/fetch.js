export const getProjects = async () => {
  const res = await fetch('/data/projects.json');
  const data = await res.json();

  return data;
};

export const getArticles = async () => {
  const res = await fetch('/data/articles.json');
  const data = await res.json();

  return data;
};

export const getArticleBySlug = async (slug) => {
  try {
    const res = await fetch('/data/articles.json');
    const data = await res.json();

    const article = data.find((article) => article.slug === slug);

    return article;
  } catch (error) {
    return new Error(error);
  }
};

export const getArticleContent = async (slug) => {
  const res = await fetch(`/assets/posts/${slug}.md`);
  const data = await res.text();

  return data;
};
