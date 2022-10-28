import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id:1, message:'Hi! How fre you?', likesCount:0},
    {id:2, message:"It's ok, and you?", likesCount:13},
  ]

  let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}

      </div>
    </div>
  );
};

export default MyPosts;
