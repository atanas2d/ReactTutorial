import React, { Component } from "react";

class ClickClass extends Component {
    clickHandler() {
        console.log(3)
    }
    
	render() {
		return (
			<div>
				<button onClick={this.clickHandler.bind(this)}>Click me</button>
			</div>
		);
	}
}

export default ClickClass;
