import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)
