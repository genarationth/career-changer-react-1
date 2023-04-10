import React from "react";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Input />
      <Table />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Table Example</h1>
    </div>
  );
};

const Input = () => {
  return (
    <div id="input">
      <input type="text" placeholder="Type new name here"></input>
      <input type="text" placeholder="Type new organization here"></input>
      <input type="text" placeholder="Type new position here"></input>
      <button>save</button>
    </div>
  );
};

const Table = () => {
    return (
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>ABC Inc</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Jane</td>
            <td>XYZ Corp.</td>
            <td>Designer</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>123 LLC</td>
            <td>Manager</td>
          </tr>
        </tbody>
      </table>
    );
  }

export default App;
