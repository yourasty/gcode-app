import React from "react";
import Save from "./Save";
import { boren65 } from "./sub/BOREN65.js";
import { plunge63 } from "./sub/PLUNGE63.js";
import { hoeken } from "./sub/HOEKEN.js";
import { plunge25 } from "./sub/PLUNGE25.js";
import { plunge20 } from "./sub/PLUNGE20.js";
import { nafrezen } from "./sub/NAFREZEN.js";
import { plunge12 } from "./sub/PLUNGE12.js";
import start_boren65 from "./main/start_BOREN65.js";
import start_plunge63 from "./main/start_PLUNGE63.js";
import start_hoeken from "./main/start_HOEKEN.js";
import start_plunge25 from "./main/start_PLUNGE25.js";
import start_plunge20 from "./main/start_PLUNGE20.js";
import start_nafrezen from "./main/start_NAFREZEN.js";
import start_plunge12 from "./main/start_PLUNGE12.js";

class Pockets extends React.Component {
  render(props) {
    return (
      <div className="pockets">
        <Save
          main={start_boren65(this.props.inputs, "BOREN65")}
          main_name="1start_BOREN65"
          sub={boren65}
          sub_name="BOREN65"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
        <Save
          main={start_plunge63(this.props.inputs, "PLUNGE63")}
          main_name="2start_PLUNGE63"
          sub={plunge63}
          sub_name="PLUNGE63"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
        <Save
          main={start_hoeken(this.props.inputs, "HOEKEN")}
          main_name="3start_HOEKEN"
          sub={hoeken}
          sub_name="HOEKEN"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
        <Save
          main={start_plunge25(this.props.inputs, "PLUNGE25")}
          main_name="4start_PLUNGE25"
          sub={plunge25}
          sub_name="PLUNGE25"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
        <Save
          main={start_plunge20(this.props.inputs, "PLUNGE20")}
          main_name="5start_PLUNGE20"
          sub={plunge20}
          sub_name="PLUNGE20"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
        <Save
          main={start_nafrezen(this.props.inputs, "NAFREZEN")}
          main_name="6start_NAFREZEN"
          sub={nafrezen}
          sub_name="NAFREZEN"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
        <Save
          main={start_plunge12(this.props.inputs, "PLUNGE12")}
          main_name="7start_PLUNGE12"
          sub={plunge12}
          sub_name="PLUNGE12"
          handleSave={this.props.handleSave}
          handleDefTool={this.props.handleDefTool}
          inputs={this.props.inputs}
        />
      </div>
    );
  }
}

export default Pockets;
