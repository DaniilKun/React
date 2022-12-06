const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   fullName: "Daniil",
    //   status: "i am a boss1",
    //   location: { city: "Samara", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   fullName: "Sasha",
    //   status: "i am a boss2",
    //   location: { city: "Kinel", country: "Russia" },
    // },
    // {
    //   id: 3,
    //   followed: false,
    //   fullName: "Andrey",
    //   status: "i am a boss3",
    //   location: { city: "Moscow", country: "Russia" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
