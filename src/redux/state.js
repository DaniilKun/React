import {rerenderEntireTree} from '../render'

let state = {
    profilePage:{
        posts: [
            { id: 1, message: "Hi! How fre you?", likesCount: 0 },
            { id: 2, message: "It's ok, and you?", likesCount: 13 },
          ],
    },
    dialogsPage:{
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
    }
  
 
};

export let addPost = (postMessage) => {

let newPost = {
  id:5,
  message: postMessage,
  likesCount:0,
}

  state.profilePage.posts.push(newPost )
  rerenderEntireTree(state)
}

export default state
