import React, { Component } from "react";
import "./chatlist.css";
import ChatListItems from "./ChatListItems";

export default class chatlist extends Component {
  allChatUsers = [
    {
      image:
        "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/139707587/original/f20e8544b1cb3fe5c380512413a8a14dc8f896cb/draw-cartoon-caricature-from-your-portrait.jpg",
      id: 1,
      name: "Bentley",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs3/188865294/original/5c1810668d17e154e86f2e013e74e00884ff3e34.jpg",
      id: 2,
      name: "Archer",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://i.etsystatic.com/22530935/r/il/e12dc2/2212316290/il_340x270.2212316290_dso3.jpg",
      id: 3,
      name: "Ryan",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.fivesquid.com/pics/t2/1562957531-108379-1-1_236px.jpg",
      id: 4,
      name: "charles",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg",
      id: 5,
      name: "Joseph",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/83221961/original/425127947f0688643bcefba40b83c767b13e2a6a/illustrate-your-cartoon-avatar.jpg",
      id: 6,
      name: "Jackson",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/dd7643b8651113ac1d8a454d78035320-1584376713197/8ea77e2e-2216-4f92-a683-3a844bf01ae7.png",
      id: 7,
      name: "Henry",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/27504677/original/dc8eab2b4552007634258e64f0655927e4dcb938/draw-your-cartoon-avatar.jpg",
      id: 8,
      name: "Aadhik",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png",
      id: 9,
      name: "Rowan",
      active: false,
      isOnline: true,
    },
    {
      image: "https://www.fivesquid.com/pics/t2/1504191094-74048-1-1.jpg",
      id: 10,
      name: "David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}