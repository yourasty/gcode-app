import React from "react";
import Input from "./inputs/Input";
import Check from "./inputs/Check";
// import Submit from './inputs/Submit'
import Tool from "./inputs/Tool";

class Inputs extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event.target.value, event.target.name);
    //console.log(event.target.value, event.target.name)
  }

  handleCheck(event) {
    this.props.handleChange(event.target.checked, event.target.name);
  }

  render(props) {
    switch (this.props.what.id) {
      case "1":
        return (
          <div className="inputs">
            <Input
              label="Size in X"
              name="size_x"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="Size in Y"
              name="size_y"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="Radius"
              name="radius"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="+radius/-chamfer"
            />
            <Input
              label="Depth"
              name="depth"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Check
              name="flench"
              handleCheck={this.handleCheck}
              value={this.props.inputs}
              comm="Has Flench"
            />
            {this.props.inputs.flench ? (
              <Input
                label="Flench size in X"
                name="flench_x"
                handleChange={this.handleChange}
                value={this.props.inputs}
                comm="mm"
              />
            ) : (
              ""
            )}
            {this.props.inputs.flench ? (
              <Input
                label="Flench size in Y"
                name="flench_y"
                handleChange={this.handleChange}
                value={this.props.inputs}
                comm="mm"
              />
            ) : (
              ""
            )}
            {this.props.inputs.flench ? (
              <Input
                label="Flench radius"
                name="flench_radius"
                handleChange={this.handleChange}
                value={this.props.inputs}
                comm="+radius/-chamfer"
              />
            ) : (
              ""
            )}
            {this.props.inputs.flench ? (
              <Input
                label="Flench thickness"
                name="flench_thickness"
                handleChange={this.handleChange}
                value={this.props.inputs}
                comm="mm"
              />
            ) : (
              ""
            )}
            <Tool handleChange={this.handleChange} inputs={this.props.inputs} />
          </div>
        );
      case "2":
        return (
          <div className="inputs">
            <Check
              name="show_contour"
              handleCheck={this.handleCheck}
              value={this.props.inputs}
              comm="Show contour"
            />
            <Input
              label="Pocket size in X"
              name="pocket_x"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="Pocket size in Y"
              name="pocket_y"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="Corner radius"
              name="corner_radius"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="+radius/-chamfer"
            />
            <Input
              label="Pocket depth"
              name="pocket_depth"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="Wall thickness X"
              name="wall_x"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="Wall thickness Y"
              name="wall_y"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="mm"
            />
            <Input
              label="No. of pockets in X"
              name="pockets_in_x"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm=""
            />
            <Input
              label="No. of pockets in Y"
              name="pockets_in_y"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm=""
            />
            <Input
              label="Pocket rotation"
              name="pocket_rotation"
              handleChange={this.handleChange}
              value={this.props.inputs}
              comm="0/90deg"
              disabled={true}
            />
          </div>
        );
      case "3":
        return <div className="inputs"></div>;
      default:
        return <div className="inputs"></div>;
    }
  }
}

export default Inputs;
