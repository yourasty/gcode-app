import React from "react";
import Tool from "./Tool";

class Save extends React.Component {
  render() {
    return (
      <div className="save">
        <p>{this.props.sub_name}</p>
        <Tool
          inputs={this.props.inputs}
          name={this.props.sub_name}
          handleDefTool={this.props.handleDefTool}
        />
        <button
          id="save"
          onClick={() => {
            this.props.handleSave(
              this.props.main,
              this.props.main_name,
              this.props.sub,
              this.props.sub_name
            );
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

export default Save;
