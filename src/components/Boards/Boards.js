import React from "react";
import "./Boards.css";
import Header from "../../header";
import LeftPane from "../HomePage/LeftPane";
import RecentlyViewed from "./RecentlyViewed";
import PersonalBoards from "./PersonalBoards";

const Boards = () => {
  return (
    <div className='boards'>
      <Header />
      <div className='boardleftpane1'>
        <LeftPane />
      </div>
      <div className='boards1'>
        <RecentlyViewed />
        <PersonalBoards />
      </div>
    </div>
  );
};

export default Boards;
