import React from "react";
import Contour from "./generate/Contour";
import Pockets from "./generate/Pockets";

class Generate extends React.Component {
  render(props) {
    return (
      <div className="generate">
        {this.props.what.id === "1" ? (
          <Contour
            inputs={this.props.inputs}
            handleDownload={this.props.handleDownload}
          />
        ) : (
          ""
        )}
        {this.props.what.id === "2" ? (
          <Pockets
            inputs={this.props.inputs}
            handleSave={this.props.handleSave}
            handleDefTool={this.props.handleDefTool}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Generate;
