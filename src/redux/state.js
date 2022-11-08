let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! How fre you?", likesCount: 0 },
        { id: 2, message: "It's ok, and you?", likesCount: 13 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sasha" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera " },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: " How are you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
    },
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log("brabus");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.state = store;
