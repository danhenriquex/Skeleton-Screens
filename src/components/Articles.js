import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';
import SkeletonElement from '../skeletons/SkeletonElement';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await result.json();

      setArticles(data);
    }, 5000)
  }, [])

  return (
    <div className="articles">
      <h2>Articles</h2>

      {articles && articles.map(item => (
        <div className="article" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}

      {!articles && [1, 2, 3, 4, 5].map(n => <SkeletonArticle key={n} theme="dark" />)}
    </div>
  )
}

export default Articles;
