import React from "react";

class Contour extends React.Component {

  
  render(props) {
    let corner = 1, corner2 = 1;
    if (this.props.inputs.radius > 0) corner = 2;
    else if (this.props.inputs.radius < 0) corner = 3;
    if (this.props.inputs.flench_radius > 0) corner2 = 2;
    else if (this.props.inputs.flench_radius < 0) corner2 = 3;

    let code = `%
<Contour>(Contour)
#101=${this.props.inputs.size_x}(SIZE IN X)
#102=${this.props.inputs.size_y}(SIZE IN Y)
#114=1.5(STEP)
#115=${this.props.inputs.depth}(DEPTH)
#117=${Math.abs(this.props.inputs.radius)}(RADIUS/CHAMFER IN MM)
#119=0(STARTING-DEPTH)

M6T${this.props.inputs.tools[this.props.inputs.tool].number}
S950M03F4000
#110=${this.props.inputs.tools[this.props.inputs.tool].dh}(D/H NUMBER)

G1902B#101D#102H100I[#101/2]J[#102/2]K0
G54(ZERO POINT)

#121=[#101/2]
#122=[#102/2]
#125=#121-110
#126=#122+110
#127=#122-110
#131=#121-#117
#132=#122-#117
#123=ABS[#115]
#114=ABS[#114]
#128=#114+#119
`;
    code +=
      corner === 1
        ? `N1(SHARP)
G0G90G43X-[#125+40]Y#126Z5.H#110
N10
G1Z-#128
G1G41Y#122D#110
G1X#121
G1Y-#122
G1X-#121
G1Y#122
G1X-[#125-40]
G1G40Y#126
#128=#128+#114
IF[#128LE#123]GOTO10
G0Z50.
`
        : corner === 2
        ? `N2(RADIUS)
G0G90G43X-[#125+40]Y#126Z5.H#110
N20
G1Z-#128
G1G41Y#122D#110
G1X#131
G2X#121Y#132R#117
G1Y-#132
G2X#131Y-#122R#117
G1X-#131
G2X-#121Y-#132R#117
G1Y#132
G2X-#131Y#122R#117
G1X-[#131-40]
G1G40Y#126
#128=#128+#114
IF[#128LE#123]GOTO20
G0Z50.
` : `
N3(CHAMFER)
G0G90G43X-#125Y#126Z5.H#110
N30
G1Z-#128
G1G41Y#122D#110
G1X#131
G1X#121Y#132
G1Y-#132
G1X#131Y-#122
G1X-#131
G1X-#121Y-#132
G1Y#132
G1X-#131Y#122
G1X-#125
G1G40Y#126
#128=#128+#114
IF[#128LE#123]GOTO30
G0Z50.
`;
    code += this.props.inputs.flench
      ? `
(Flench)
#101=${this.props.inputs.flench_x}(SIZE IN X)
#102=${this.props.inputs.flench_y}(SIZE IN Y)
#114=1.5(STEP)
#115=${
          Number(this.props.inputs.flench_thickness) +
          Number(this.props.inputs.depth) +
          Number(this.props.inputs.tools[this.props.inputs.tool].radius)
        }(DEPTH)
#117=${Math.abs(this.props.inputs.flench_radius)}(RADIUS/CHAMFER IN MM)
#119=${this.props.inputs.depth}(STARTING-DEPTH)

G1902B#101D#102H100I[#101/2]J[#102/2]K0

#121=[#101/2]
#122=[#102/2]
#125=#121-110
#126=#122+110
#127=#122-110
#131=#121-#117
#132=#122-#117
#123=ABS[#115]
#114=ABS[#114]
#128=#114+#119

`
      : "";
    code +=
      corner2 === 1 && this.props.inputs.flench
        ? `
N1(SHARP)
G0G90G43X-[#125+40]Y#126Z5.H#110
N10
G1Z-#128
G1G41Y#122D#110
G1X#121
G1Y-#122
G1X-#121
G1Y#122
G1X-[#125-40]
G1G40Y#126
#128=#128+#114
IF[#128LE#123]GOTO10
G0Z50.
`
        : corner2 === 2 && this.props.inputs.flench
        ? `
N2(RADIUS)
G0G90G43X-[#125+40]Y#126Z5.H#110
N20
G1Z-#128
G1G41Y#122D#110
G1X#131
G2X#121Y#132R#117
G1Y-#132
G2X#131Y-#122R#117
G1X-#131
G2X-#121Y-#132R#117
G1Y#132
G2X-#131Y#122R#117
G1X-[#131-40]
G1G40Y#126
#128=#128+#114
IF[#128LE#123]GOTO20
G0Z50.
`
        : corner2 === 3 && this.props.inputs.flench
        ? `
N3(CHAMFER)
G0G90G43X-#125Y#126Z5.H#110
N30
G1Z-#128
G1G41Y#122D#110
G1X#131
G1X#121Y#132
G1Y-#132
G1X#131Y-#122
G1X-#131
G1X-#121Y-#132
G1Y#132
G1X-#131Y#122
G1X-#125
G1G40Y#126
#128=#128+#114
IF[#128LE#123]GOTO30
G0Z50.
`
        : "";
    code += `M30
%
`;
    return (
      <div>
        <button id="code" value={code} onClick={this.props.handleDownload}>
          Save
        </button>
        <pre id="code">{code} </pre>
      </div>
    );
  }
}

export default Contour;
