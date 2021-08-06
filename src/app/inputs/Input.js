import React from "react";

class Input extends React.Component {
  render(props) {
    return (
      <div className="input_div">
        <label className="input_label_l">
          {this.props.label}:</label>
          <input
            className="input"
            name={this.props.name}
            value={this.props.value[this.props.name]}
            onChange={this.props.handleChange}
            type="number"
            disabled={this.props.disabled}
          />
        <label className="input_label">
          {this.props.comm}
        </label>
      </div>
    );
  }
}
export default Input;
