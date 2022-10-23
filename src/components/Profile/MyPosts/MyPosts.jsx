import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea ></textarea>
        <button>Add post</button>

      </div>

      <div className={s.posts}>
        <Post message = 'Hi! How fre you?' likesCount = '0'/>
        <Post message = "It's ok, and you?" likesCount = '13'/>
        
      </div>
      
    </div>
  );
};

export default MyPosts;
