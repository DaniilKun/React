import s from "./Post.module.css";

const Post = (props) => {
  console.log(props.message)
  return (
    <div className={s.item}>
      <img src="https://variety.com/wp-content/uploads/2022/07/Screen-Shot-2022-07-05-at-10.27.56-AM.png" />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post ;
