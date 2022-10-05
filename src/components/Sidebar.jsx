import React from 'react';
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';



export default function Sidebar(){
	const navigate = useNavigate();

	function handleNav(){
		navigate("/CreateFinancialStatement")
	}
	function handleHome(){
		navigate("/")
	}
	

	return <Container>
	
		<div className="navigator">
			<button className="goTo" onClick={()=> handleHome()}>Financial Models</button>
			<button className="goTo" onClick={()=> handleNav()}>Financial Statements</button>
		</div>
	
	</Container>
}


const Container = styled.div`
position: fixed;
height: 100%;
width: 180px;
z-index: 1;
top: 0;
left: 0;
font-family: 'Segoe UI';
overflow-x: hidden;
padding-top: 60px;
background-color: #252525;
.navigator{
	width: 100%;
	background-color: #252525;
	margin-top: 140px;
	.goTo{
		cursor: pointer;
		color: #FFFFFF;
		background-color: #252525;
		font-size: 20px;
		border: none;
		margin-top:10px;
		margin-bottom: 12px;
		border-radius: 4px;
		box-shadow: rgba(0, 0, 0, 0.34) 0px 4px 12px;
		width: 175px;
		height: 80px;
		&:hover {
			background-color: #3772FF;
			border-radius: 4px;
			border: 0.25px solid #FFFFFF;
		  }
	}
}`;
