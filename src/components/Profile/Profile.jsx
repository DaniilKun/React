import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div >
      <div>
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--YOcv_Dl---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://kolosek.com/content/images/2018/02/beach.png" />
      </div>

      <div>ava + description</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
