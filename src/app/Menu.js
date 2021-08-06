import React from "react";
import Item from "./menu/Item";

class Menu extends React.Component {
  //menu on top

  render(props) {
    return (
      <div className="menu">
        <Item name="Contour" id="1" click={this.props.click} />
        <Item name="Pockets" id="2" click={this.props.click} />
      </div>
    );
  }
}

export default Menu;
