import React from "react";
import LeftPane from "./LeftPane";
import MiddlePane from "./MiddlePane";
import RightPane from "./RightPane";

const MainHomePage = () => {
  return (
    <div className='leftpane1'>
      <div className='leftpane2'>
        <LeftPane />
        <MiddlePane />
        <RightPane />
      </div>
    </div>
  );
};

export default MainHomePage;
