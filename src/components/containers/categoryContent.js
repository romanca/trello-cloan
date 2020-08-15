// import React from "react";
// import "./categoryItem";

// const CategoryContent = (props) => {
//   return (
//     <div className='categoryItemClass7' style={props.firstStyle}>
//       <div className='categoryItemClass3'>
//         <textarea
//           type='text'
//           placeholder='Enter a title for this style...'
//           className='categoryItemClass6'
//         />
//       </div>
//       <div className='categoryItemClass11'>
//         <form>
//           <button className='categoryItemClass8' disabled={!props.term}>
//             Add card
//           </button>
//         </form>
//         <button
//           className=' categoryItemClass12  '
//           onClick={props.handleFirstStyle}>
//           <span className='icon-hamburger-menu-close categoryClass13'></span>
//         </button>
//       </div>
//     </div>
//   );
// };
// export default CategoryContent;

// import React, { Component } from "react";
// import CategoryContainer from "./categoryContainer";
// import "./categoryContent.css";

// class Content extends Component {
//   state = {
//     mainStyle: true,
//   };

//   onChange = (e) => {
//     this.setState({ item: e.target.value });
//   };
//   onSubmit = (e) => {
//     e.preventDefault();

//     this.setState({
//       item: "",
//       lists: [...this.state.lists, this.state.item],
//     });
//   };

//   handleFirstStyle = () => {
//     this.setState({
//       mainStyle: true,
//     });
//   };
//   handleSecondStyle = () => {
//     this.setState({
//       mainStyle: false,
//     });
//   };
//   render() {
//     let firstStyle = {};
//     let secondStyle = {};

//     if (this.state.mainStyle) {
//       firstStyle.display = "none";
//     } else {
//       secondStyle.display = "none";
//     }
//     return (
//       <div>
{
  /* <div
          className='categoryClass5'
          style={secondStyle}
          onClick={this.handleSecondStyle}>
          <div>
            <span className='categoryClass6'>
              <span className='fa fa-plus categoryClass7'></span>
              Add a list
            </span>
          </div>
        </div> */
}
{
  /* <div style={firstStyle} className='categoryClass10'>
          <form>
            <input
              type='text'
              onClick={this.handleFirstStyle}
              className='categoryClass9'
            />
            <div>
              <button className='categoryClass8'>Add List</button>
              <button className='fa fa-plus'></button>
            </div>
          </form>
        </div> */
}
{
  /* <div className='categoryClass2' style={firstStyle}>
          <div className='categoryClass1'>
            <div className='categoryClass4'>
              <div>
                <input
                  type='text'
                  placeholder='Enter list title...'
                  className='categoryClass9'
                  value={this.props.term}
                  onChange={this.props.onChange}
                />
              </div>
              <div className='categoryClass11'>
                <form onSubmit={this.props.onSubmit}>
                  <button
                    className='categoryClass8'
                    onClick={this.props.onSubmit}>
                    Add List
                  </button>
                </form>

                <button
                  className=' categoryClass12  '
                  onClick={this.handleFirstStyle}>
                  <span className='icon-hamburger-menu-close categoryClass13'></span>
                </button>
              </div>
            </div>
          </div>
        </div> */
}

{
  /* <div style={secondStyle} onClick={this.handleSecondStyle}>
          {this.props.items.map((item, index) => (
            <div
              className='categoryClass5'
              style={secondStyle}
              onClick={this.handleSecondStyle}>
              <span className='categoryClass6'>
                <span className='fa fa-plus categoryClass7'>{item}</span>
                Add a list
              </span>
            </div>
          ))}
        </div>
      </div> */
}
{
  /* );
  }
}

export default Content;   */
}
