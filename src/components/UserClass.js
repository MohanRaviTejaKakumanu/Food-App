import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, age } = this.props;
    const { count } = this.state;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>Age: {age}</h3>
        <h3>count : {count}</h3>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default UserClass;
