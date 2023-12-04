import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        userProfile={props.userProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

// let posts = "133";
// const numbers = [1, 4, 9];
// addPost={props.addPost}
// onPostChange={props.onPostChange}
{
  /* <MyPosts numbers={numbers} /> */
}

//store={props.store}
