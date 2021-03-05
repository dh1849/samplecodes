import React from "react";
import { Post, PostIntro, PostMain, PostOutro } from "./Post/Post";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header></header>
      <Post heading="My first product">
        <PostIntro>
          <p>This message is from component "PostIntro"</p>
        </PostIntro>
        <PostMain>
          <ul>
            <li>This is the unordered list #1 from component PostMain</li>
            <li>List #2</li>
            <li>List #3</li>
          </ul>
        </PostMain>
        <PostOutro>
          <p>This message is from component PosOutro</p>
        </PostOutro>
      </Post>
      <footer></footer>
    </div>
  );
}
