import React from "react";
import Menu from "./app/Menu";
import Draw from "./app/Draw";
import Inputs from "./app/Inputs";
import Generate from "./app/Generate";
import data from "./app/tools.json";
import tool_def from "./app/generate/pockets_default_tools.json";
import _ from "lodash";

class App extends React.Component {
  // main app
  constructor() {
    super()
    this.state = {
      draw: { name: "Contour", id: "1" },
      inputs: {
        size_x: 1430,
        size_y: 920,
        radius: 19,
        depth: 23,
        flench: false,
        tool: 3,
        tools: data,
        tool_def: tool_def,
        flench_x: 1510,
        flench_y: 1000,
        flench_radius: -20,
        flench_thickness: 19,
        pocket_x: 215,
        pocket_y: 110,
        corner_radius: 5,
        pocket_depth: 95,
        wall_x: 12,
        wall_y: 12,
        pockets_in_x: 6,
        pockets_in_y: 7,
        pocket_rotation: 0,
        pocket_tool: {},
        show_contour: true,
      },
    };
    this.click = this.click.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.download = this.download.bind(this)
    this.handleDownload = this.handleDownload.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleDefTool = this.handleDefTool.bind(this)
    this.fetchTools = this.fetchTools.bind(this)
    this.loadLocalState = this.loadLocalState.bind(this)
    this.debounce = this.debounce.bind(this)
    this.handleLocalStorage = this.handleLocalStorage.bind(this)
  }

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

  click(name, id) {
    this.setState({ draw: { name: name, id: id } });
    if (!this.state.inputs.show_contour)
      this.setState((prevState) => {
        return { inputs: { ...prevState.inputs, show_contour: true } }
      });
  }

  handleChange(value, name) {
    this.setState((prevState) => {
      return { inputs: { ...prevState.inputs, [name]: value } }
    });
  }

  download(data, filename) {
    let file = new Blob([data], { type: "text/plain" })
    if (window.navigator.msSaveOrOpenBlob)
      window.navigator.msSaveOrOpenBlob(file, filename + ".NC");
    else {
      let a = document.createElement("a"),
        url = URL.createObjectURL(file)
      a.href = url
      a.download = filename + ".NC"
      document.body.appendChild(a)
      a.click()
      setTimeout(function () {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 0)
    }
  }

  handleDownload(event) {
    this.download(event.target.value, this.state.draw.name)
  }

  handleSave(main, main_name, sub, sub_name) {
    if (sub) this.download(sub, sub_name)
    if (main) this.download(main, main_name)
  }

  handleDefTool(event) {
    this.setState((prevState) => {
      return {
        inputs: {
          ...prevState.inputs,
          pocket_tool: {
            ...prevState.inputs.pocket_tool,
            [event.target.name]: event.target.value
          },
        },
      };
    });
  }

  fetchTools() {
    let tools = {};
    Object.keys(this.state.inputs.tool_def).forEach((key) => {
      tools[key] = _.findIndex(this.state.inputs.tools, {
        name: this.state.inputs.tool_def[key],
      });
    });
    return tools
  }

  loadLocalState() {
    if (localStorage.getItem("state") !== "") {
      this.setState({ inputs: JSON.parse(localStorage.getItem("state")) })
    }
  }

  componentDidMount() {

    this.setState((prevState) => {
      return { inputs: {
        ...prevState.inputs,
        pocket_tool: this.fetchTools()
      }};
    });
    setTimeout(this.loadLocalState(), 0)
  }

  handleLocalStorage = this.debounce(() => localStorage.setItem("state", JSON.stringify(this.state.inputs)), 1000);
  // handleRotation = this.debounce(() => this.)

  componentDidUpdate() {
    this.handleLocalStorage()
  }


  render() {
    return (
      <div className="main">
        <Menu click={this.click} />
        <Draw what={this.state.draw} inputs={this.state.inputs} />
        <Inputs
          what={this.state.draw}
          inputs={this.state.inputs}
          handleChange={this.handleChange}
        />
        <Generate
          inputs={this.state.inputs}
          what={this.state.draw}
          handleDownload={this.handleDownload}
          handleSave={this.handleSave}
          handleDefTool={this.handleDefTool}
        />
      </div>
    )
  }
}

export default App;
