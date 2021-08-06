import React from "react";

class Check extends React.Component {
  render(props) {
    return (
      <div className="input_div">
        <label className="input_label_l">
        </label>
          <input
            className="input_check"
            id={this.props.name}
            type="checkbox"
            name={this.props.name}
            checked={this.props.value[this.props.name]}
            onChange={this.props.handleCheck}
          />
        <label htmlFor={this.props.name} className="input_label">
          {this.props.comm}
        </label>
      </div>
    );
  }
}
export default Check;
