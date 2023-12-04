import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Commen/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <div>
        <img
          src="https://s.w-x.co/util/image/w/de-winter-sonne-GettyImages-1299419125%20Kopie.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60"
          alt="logo"
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <div>{props.userProfile.userId}</div>
        <img src={props.userProfile.photos.large} alt="logo" />
        {/* <ProfileStatus status="Hallo!" /> */}
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>{props.userProfile.aboutMe}</div> aboutMe
        <div>{props.userProfile.contacts.facebook}</div>
        <div>{props.userProfile.contacts.website}</div>
        <div>{props.userProfile.contacts.vk}</div>
        <div>{props.userProfile.contacts.twitter}</div>
        <div>{props.userProfile.contacts.instagram}</div>
        <div>{props.userProfile.contacts.youtube}</div>
        <div>{props.userProfile.contacts.github}</div>
        <div>{props.userProfile.contacts.mainLink}</div>
        <div>{props.userProfile.lookingForAJob}</div>
        <div>{props.userProfile.lookingForAJobDescription}</div>
        <div>{props.userProfile.fullName}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
