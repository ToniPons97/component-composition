import React from "react";

export class Child extends React.Component {
    render() {
        return <div>Child {this.props.index}</div>;
    }
}