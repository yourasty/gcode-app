import React from "react";

class RRect extends React.Component {
  debounce = (fn, ms) => {
    let timer;
    return (_) => {
      clearTimeout(timer);
      timer = setTimeout((_) => {
        timer = null;
        fn();
      }, ms);
    };
  };

  draw = () => {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.roundRect = function (x, y, w, h, r) {
      this.moveTo(x + Number(r), y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      return this;
    };
    ctx.chRect = function (x, y, w, h, r) {
      r = Math.abs(r);
      this.moveTo(x + r, y);
      this.lineTo(x + w - r, y);
      this.lineTo(x + w, y + r);
      this.lineTo(x + w, y + h - r);
      this.lineTo(x + w - r, y + h);
      this.lineTo(x + r, y + h);
      this.lineTo(x, y + h - r);
      this.lineTo(x, y + r);
      this.lineTo(x + r, y);
      return this;
    };
    const rect = canvas.parentNode.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = 280;

    if (this.props.inputs.show_contour) {
      let what = "rect";
      if (this.props.inputs.radius > 0) what = "roundRect";
      else if (this.props.inputs.radius < 0) what = "chRect";
      ctx[what](
        canvas.width / 2 - this.props.inputs.size_x / 2 / 5,
        canvas.height / 2 - this.props.inputs.size_y / 2 / 5,
        this.props.inputs.size_x / 5,
        this.props.inputs.size_y / 5,
        this.props.inputs.radius / 5
      );
      if (this.props.inputs.flench) {
        let corner = "rect";
        if (this.props.inputs.flench_radius > 0) corner = "roundRect";
        else if (this.props.inputs.flench_radius < 0) corner = "chRect";
        ctx[corner](
          canvas.width / 2 - this.props.inputs.flench_x / 2 / 5,
          canvas.height / 2 - this.props.inputs.flench_y / 2 / 5,
          this.props.inputs.flench_x / 5,
          this.props.inputs.flench_y / 5,
          this.props.inputs.flench_radius / 5
        );
      }
    }

    if (this.props.what === "2") {
      let corner = "rect";
      let columns = this.props.inputs.pockets_in_x;
      let rows = this.props.inputs.pockets_in_y;
      let x = this.props.inputs.pocket_x / 5,
        y = this.props.inputs.pocket_y / 5,
        r = this.props.inputs.corner_radius / 5;
      let wx = this.props.inputs.wall_x / 5,
        wy = this.props.inputs.wall_y / 5;
      let mx = (columns / 2) * (x + wx),
        my = (rows / 2) * (y + wy);
      if (r > 0) corner = "roundRect";
      else if (r < 0) corner = "chRect";
      for (let i = 0; i < Math.trunc(rows / 2); i++) {
        for (let j = 0; j < Math.trunc(columns); j++) {
          ctx[corner](
            -mx + (x + wx) * j + canvas.width / 2 + wx / 2,
            -(-my + (y + wy) * i) + canvas.height / 2 - y - wy / 2,
            x,
            y,
            r
          );
          ctx[corner](
            -mx + (x + wx) * j + canvas.width / 2 + wx / 2,
            -my + (y + wy) * i + canvas.height / 2 + wy / 2,
            x,
            y,
            r
          );
          if (rows % 2 !== 0 && i === Math.trunc(rows / 2) - 1) {
            ctx[corner](
              -(-mx + (x + wx) * j) + canvas.width / 2 - x - wx / 2,
              canvas.height / 2 - y / 2,
              x,
              y,
              r
            );
          }
        }
      }
    }

    ctx.stroke();
  };

  handleResize = this.debounce(this.draw, 200);

  componentDidMount() {
    this.draw();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    this.draw();
  }

  render(props) {
    return (
      <div>
        <canvas ref="canvas" />
      </div>
    );
  }
}
export default RRect;
