import React from "react";
class Tool extends React.Component {
  render(props) {
    let options = [];
    Object.keys(this.props.inputs.tools).forEach((e) => {
      options.push(
        <option key={e} value={e}>
          {this.props.inputs.tools[e].name}
        </option>
      );
    });
    return (
      <div className="selectTool">
        <label htmlFor={this.props.name}>Tool:</label>
        <select
          selected={this.props.inputs.tool_update}
          name={this.props.name}
          defaultValue={this.props.inputs.pocket_tool[this.props.name]}
          onChange={this.props.handleDefTool}
        >
          {options}
        </select>
      </div>
    );
  }
}

export default Tool;
