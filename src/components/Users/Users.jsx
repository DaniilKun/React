import React from "react";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
                <img />
            </div>
            <div>
                <button>Follow </button>
            </div>
          </span>
          <span>
            <span>
                <div></div>
                <div></div>
            </span>
            <span>
                <div>{u.fullName}</div>
                <div></div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
