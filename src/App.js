import React from 'react';
import PageContent from "./components/PageContent";
import ScreenSize from "./components/ScreenSize";
import styled, {createGlobalStyle} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function App() {
	const Container = styled.div`
		border: 1px solid #e2e2e2;
		box-shadow: 1px solid rgba(0, 0, 0, 0.50);
		padding: 10px 20px;
		background: #ffffff;
		margin: 10px 0;
		text-align: center;
		@media(min-width: 768px) {
			width: 100%;
		}
	`;
	const FullScreen = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
		height: 95vh;
		flex-direction: column;
		margin: 0 15px;
	`;
	const Constraint = styled.div`
		width: 100%;
		max-width: ${props => props.width}
	`;
	const Header = styled.div`
		background-color: #0C0E13;
		padding: 6px 15px;
		height: 39px;
	`;
	const Title = styled.h1`
		color: #FFFFFF;
		font-size: 0.88em;
		font-family: 'Open Sans', sans-serif;
	`;
	const Footer = styled.div`
		text-align: center;
		padding: 35px 0px 25px;
		background-color: #0C0E13;
		span { 
			font-style: italic; 
			color: #bfbfbf;
			opacity: 0.9;
		}
		svg {
			margin: 0 6px;
			transition: 0.6s;
			:hover {
				transform: scale(1.3);
			}
		}
		.source, .source > a {
			display: block;
			color: #F47;
		}
		font-size: 0.88em;
	`;
	const GlobalStyle = createGlobalStyle`
		body {
			background-color: #eeeeee;
			margin: 0;
			padding: 0;
		}

		* {
			font-family: 'Open Sans', sans-serif;
		}
	`;
	const date = new Date().getFullYear();
	return (
		<>
			<GlobalStyle />
			<Header>
				<Title>WhatIsMyScreenSize</Title>
			</Header>
			<FullScreen>
				<Constraint width={"768px"}>
					<PageContent />
					<Container>
       						<ScreenSize></ScreenSize>
					</Container>
				</Constraint>
			</FullScreen>
			<Footer>
				<span>Handmade with <FontAwesomeIcon icon={faHeart} color="#F47" /> by me {date}</span>
				<span className="source"><a href="https://github.com/twenty/whatismyscreensize" rel="noopener noreferrer" target="_blank">view source</a></span>
			</Footer>
		</>
  	);

}

export default App;
