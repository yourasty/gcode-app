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
        <label htmlFor="tool">Tool:</label>
        <select
          name="tool"
          defaultValue={this.props.inputs.tool}
          onChange={this.props.handleChange}
        >
          {options}
        </select>
      </div>
    );
  }
}

export default Tool;
