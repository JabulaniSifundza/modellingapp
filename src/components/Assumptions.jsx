import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';

export default function Assumptions(){

	const {sales, costs, interest, inflation, regulation, setSales, setCosts, setInterest, setinflation, setRegulation} = useContext(Financialcontext);

	return <Container>
		<div className="assumptionsContainer">
			<div className="assumptionsHeader">
				<h3 className="title">Assumptions</h3>
				<h5 className="explanation">
					This where you enter assumptions about the market and/or outlook that will inform your model.
				</h5>
			</div>

			<div className="assumption">
				<label htmlFor="salesAssumptions">Sales</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="salesAssumptions" className="assumptionInput" value={sales} onChange={(e) => setSales(e.target.value)}/>
			</div>

			<div className="assumption">
				<label htmlFor="costAssumptions">Costs</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="costAssumptions" className="assumptionInput" value={costs} onChange={(e) => setCosts(e.target.value)}/>
			</div>

			<div className="assumption">
				<label htmlFor="interestAssumptions">Interest Rate</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="interestAssumptions" className="assumptionInput" value={interest} onChange={(e) => setInterest(e.target.value)}/>
			</div>

			<div className="assumption">
				<label htmlFor="inflationAssumptions">Inflation</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="inflationAssumptions" className="assumptionInput" value={inflation} onChange={(e) => setinflation(e.target.value)}/>
			</div>

			<div className="assumption">
				<label htmlFor="moreOrLessRegulation">Regulation</label>
				<select name="moreOrLessRegulation" id="moreOrLessRegulation" className="assumptionInput" value={regulation} onChange={(e) => setRegulation(e.target.value)}>
				<option value="Answer" defaultValue>More or Less</option>
					<option value="More">More</option>
					<option value="Less">Less</option>
				</select>
			</div>
		</div>

		<div>
		<button className="generateModel">Create Model</button>
		
		</div>
	
	</Container>
}

const Container = styled.div`
position: fixed;
height: 100%;
width: 320px;
z-index: 1;
top: 0;
right: 0;
overflow-x: hidden;
padding-top: 20px;
background-color: #252525;
color: #FFFFFF;
font-family: 'Segoe UI';
border-left: 8px solid #161616;
border-right: none;
border-top: none;


.generateModel{
	width: 120px;
	height: 40px;
	background-color: #3772FF;
	color: #FFFFFF;
	margin-top: 20px;
	border: none;
	border-radius: 4px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	cursor: pointer;
	font-size: 18px;
}
.assumptionsContainer{
	width: 100%;
	.assumptionsHeader{
		font-family: 'Segoe UI';
		width: 100%;
		h3{
			font-size: 18px;
		}
		h4{
			font-size: 14px;
			color: #FFFFFF;
		}
		.title{
			color: #FFFFFF;
		}

	}
	.assumption{
		font-family: 'Segoe UI';
		color: #FFFFFF;
		display: grid;
		grid-template-columns: 1fr 1fr;
		font-size: 18px;
		margin-top:20px;
		margin-bottom: 20px;
		align-text: left;
		.assumptionInput{
			border-bottom: 2px solid #FFFFFF;
			background-color: #252525;
			color: #FFFFFF;
			border-right: none;
			border-left: none;
			border-top: none;
			
		}
		select{
			width: 100%;
			border: none;
			border-bottom: 2px solid #FFFFFF;
			margin-right: 20px;
		}
	}
}`;