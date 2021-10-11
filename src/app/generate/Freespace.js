import React from "react";
import Save from "./Save";
import { freespace } from "./sub/FREESPACE.js";
import start_freespace from "./main/start_FREESPACE.js";

class Pockets extends React.Component {
  render(props) {
    return (
      <div className="Freespace">
        <Save
          main={start_freespace(this.props.inputs, "FREESPACE")}
          main_name="1start_FREESPACE"
          sub={freespace}
          sub_name="FREESPACE"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
      </div>
    );
  }
}

export default Pockets;
