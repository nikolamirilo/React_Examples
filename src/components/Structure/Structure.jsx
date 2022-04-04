import React from "react";
import vector from "../../assets/images/vector1.png";

const Structure = () => {
  return (
    <div className="structure container bg-primary position-relative">
      <div className="vector-image">
        <img src={vector} alt="Vector" />
      </div>
      <div className="row">
        <div className="inbox col-3">
          <div className="top-content">Top Content</div>
          <div className="chats">Chats</div>
          <div className="bottom-content">Bottom Content</div>
        </div>
        <div className="chat-feed col-6">
          <div className="chat-feed-navbar">Navabar</div>
          <div className="messages">Messages</div>
          <div className="message-form">Message Form</div>
        </div>
        <div className="profile col-3">
          <div className="name">Name</div>
          <div className="profile-img">Image</div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
