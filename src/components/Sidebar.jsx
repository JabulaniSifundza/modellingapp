import React from 'react';
import styled from "styled-components";


export const Sidebar = () =>{

	return <Container>
		<div className="navigator">
			<button className="goTo">Financial Models</button>
			<button className="goTo">Financial Statements</button>
		</div>
	</Container>
}


const Container = styled.div`
position: fixed;
height: 100%;
width: 200px;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
padding-top: 60px;
background-color: #252525;
.navigator{
	width: 100%;
	border-top:2px solid #FFFFFF;
	border-bottom:2px solid #FFFFFF;
	background-color: #252525;
	.button{
		cursor: pointer;
		color: #FFFFFF;
		background-color: #252525;
		font-size: 34px;
	}
}`;
