import React from "react";

class Item extends React.Component {
  //buttons
  constructor() {
    super();
    this.state = {
      style: {
        backgroundColor: "#212227",
      },
    };
  }

  handleMouseOver = () => {
    this.setState({ style: { backgroundColor: "#637074" } });
  };
  handleMouseLeave = () => {
    this.setState({ style: { backgroundColor: "#212227" } });
  };
  handleClick = () => {
    this.props.click(this.props.name, this.props.id);
  };

  render(props) {
    return (
      <div
        className="menu-item"
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
        style={this.state.style}
      >
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Item;
