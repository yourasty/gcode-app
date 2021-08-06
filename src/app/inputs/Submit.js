import React from "react";

class Submit extends React.Component {
  render(props) {
    return (
      <button
        value="submit"
        onClick={() => {
          this.props.handleGenerate();
        }}
      >
        Generate
      </button>
    );
  }
}

export default Submit;
