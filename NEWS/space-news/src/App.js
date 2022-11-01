import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then((res) => res.json())
    .then((data) => { setNewsList(data); })
  },[]);

  console.log(newsList)

  return (
    <div className="App">
      <div className="title">
      <h1>Space News</h1>
      </div>
      <div className="newsContainer">
        {newsList.map((article, key) => {
          return (
          <div key={key} className="article" onClick={() => {window.location.href = article.url}}>
            <h1>{article.title}</h1>
            <img src={article.imageUrl} alt={"space_image"} ></img>
            <article>{article.summary}</article>
            <h4>{article.publishedAt}</h4>
          </div>
          )})
        }
      </div>
    </div>
  );
}

export default App;
