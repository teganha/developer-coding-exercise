import './App.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from "react-router-dom";
const axios = require('axios');



function App() {
  const [posts, setPosts] = useState([]);

  // Add in proper error handling as well
  // Replace with proper rest request to get titles of blogs and ids
  useEffect(() => {
    const instance = axios.create({
      baseURL: 'http://localhost:4000',
      timeout: 1000,
    });

    instance.get("/posts/")
    .then(response => {
      setPosts(response.data);

    }).catch(error => {
      console.log(error);
    });
  }, []);

  const renderPosts = post => {
    return (
      <div key={post.id}>
        <li>
          {post.id === 3 && <Link to="/3">Technologies we use</Link> }
          {post.id === 4 && <Link to="/4">When people do good</Link> }
        </li>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
      <header className="App-header">
        Posts
      </header>
      {posts.length > 0 && (
        <div>
          <ul>
            { posts.map(post => renderPosts(post)) }
          </ul>
        </div>
      )}
      <Switch>
        <Route path="/3">
          <Blog post={posts.find(blog => blog.id === 3)} />
        </Route>
        <Route path="/4">
          <Blog post ={posts.find(blog => blog.id === 4)}/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

function Blog(props) {
  return (
    <div>
      {props.post.content}
    </div>
  );
}

Blob.propTypes = {
  post: PropTypes.object,
}


export default App;
