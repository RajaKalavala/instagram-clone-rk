import { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "raja",
      caption: "This is caption",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkG8Ut6pR95qddRmWKkqVeOa3iuwv8-BzTg&usqp=CAU",
    },
    {
      username: "k.raja",
      caption: "This is caption",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-1qjrRaNrrF_62w7IaKO9P-WYvQASraDfg&usqp=CAU",
    },
  ]);
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImages"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
