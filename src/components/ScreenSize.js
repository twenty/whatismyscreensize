import React from "react";
import styled from "styled-components";
class Screensize extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentWidth: window.innerWidth,
			currentHeight: window.innerHeight
		}

	}

	onResize() {
		this.setState({
			currentWidth: window.innerWidth,
			currentHeight: window.innerHeight
		});
	}

	componentDidMount() {
		window.addEventListener( "resize", this.onResize.bind(this) );
	}

	componentWillUnmount() {
		window.removeEventListener( "resize", this.onResize.bind(this) );
	}

	render() {
		const Large = styled.span`
			display: inline-block;
			margin: 10px 4px;
			font-size: 36px;
			font-weight: bold;
		`;
		return (
			<>
				<Large>{this.state.currentWidth}</Large>
				<Large>x</Large>
				<Large>{this.state.currentHeight}</Large>
			</>
		)
	}
}

export default Screensize;
