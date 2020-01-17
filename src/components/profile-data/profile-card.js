import React from "react";

const ProfileCard = (props) => {
  const renderCard = () => {
    return (
      <div className="profile-card">
        <div className="profile-card-img">
          <img src={props.user.imgUrl} />
        </div>
        <div className="card-info">
          <div className="profile-card-name">{props.user.name}</div>
          <div className="profile-card-instrument">{props.user.instrument}</div>
        </div>
      </div>
    );
  };

  return <div>{renderCard()}</div>;
};

export default ProfileCard;
