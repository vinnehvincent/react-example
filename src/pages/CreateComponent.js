import React, { Component } from "react";

class CreateComponent extends Component {
  state = {
    name: "",
    port: ""
  };
  onSubmit = event => {
    this.setState({
      name: "",
      port: ""
    });
  };
  onChangeHostName = e => {
    this.setState({
      name: e.target.value
    });
  };
  onChangePort = e => {
    e.preventDefault();
    this.setState({
      port: e.target.value
    });
  };
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h3>Add New Server </h3>
        <form>
          <div className="form-group">
            <input
              onChange={this.onChangeHostName}
              type="text"
              className="from-control"
              placeholder="Host Name"
            />
          </div>

          <div className="form-group">
            <input
              onChange={this.onChangePort}
              type="text"
              className="from-control"
              placeholder="Port Number"
            />
          </div>

          <div className="form-group">
            <input
              onClick={this.onSubmit}
              type="submit"
              className="btn btn-primary"
              value="Add Node Server"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateComponent;
