import React from "react";
import "./subHeader.css";

const SubHeader = () => {
  return (
    <div className='classSubHeader1'>
      <div className='classSubHeader2'>
        <p>MERN Stack Tutorial</p>
      </div>
      <div>
        <button className='classSubHeader3'>
          <span className='fa fa-star-o classSubHeader4'></span>
        </button>
      </div>
      <div className='classSubHeader10'>
        <span className='classSubHeader9'></span>
        <button className='classSubHeader5'>
          <span className='classSubHeader8'>Personal</span>
        </button>
        <span className='classSubHeader9'></span>
        <button className='classSubHeader6'>
          <span className='fa fa-globe classSubHeader7'></span>
          <span className='classSubHeader8'>Public</span>
        </button>
        <span className='classSubHeader9'></span>
        <button className='classSubHeader11'>
          <span className='classSubHeader13'>A</span>
          <span className='fa fa-angle-double-up classSubHeader12'></span>
        </button>
      </div>
      <div className='classSubHeader14'>
        <button className='classSubHeader6'>
          <span className='fa fa-ellipsis-h classSubHeader7'></span>
          <span className='classSubHeader8'>Show Menu</span>
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
