import React, { Component, useState, useEffect } from 'react';

const App = () => {
  // state
  const [news, setNews] = useState([])
  const [seachQuery, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search?query=react')
  // fetch news
  const fetchNews = () => {
    fetch(url)
      .then(result => result.json())
      // .then(data => console.log(data))
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchNews()
  }, [url]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrl(`http://hn.algolia.com/api/v1/search?query=${seachQuery}`)
  }

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={seachQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  )
}; 

// class App extends Component {
//   render() {
//     return (
//       <h2>lon me may</h2>
//     );
//   }
// }

export default App;
