import React from "react";
import styles from "./users.module.css";

let Users = (props) => {

    if (props.users.length === 0) {
      props.setUsers([
    {
      id: 1,
      photoUrl: "https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg",
      followed: false,
      fullName: "Daniil",
      status: "i am a boss1",
      location: { city: "Samara", country: "Russia" },
    },
    {
      id: 2,
      photoUrl: "https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg",
      followed: true,
      fullName: "Sasha",
      status: "i am a boss2",
      location: { city: "Kinel", country: "Russia" },
    },
    {
      id: 3,
      photoUrl: "https://тайна-вашего-имени.рф/img/imena/dmitriy.jpg",
      followed: false,
      fullName: "Andrey",
      status: "i am a boss3",
      location: { city: "Moscow", country: "Russia" },
    },
  ]);}

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow{" "}
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow{" "}
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
