import React from "react";
import Rect from "./draw/Rect";

class Draw extends React.Component {
  render(props) {
    return (
      <div className="draw">
        <h1>{this.props.what.name}</h1>
        <div className="draw-sub">
            <Rect inputs={this.props.inputs} what={this.props.what.id} />
        </div>
      </div>
    );
  }
}

export default Draw;
