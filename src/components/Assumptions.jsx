import React, {useState, useEffect} from 'react';
import styled from "styled-components";

export const Assumptions = () =>{
	const [assumptions, setAssumptions] = useState();



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
				<input type="number" placeholder="Growth/Decline rate (%)" id="salesAssumptions"/>
			</div>

			<div className="assumption">
				<label htmlFor="costAssumptions">Costs</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="costAssumptions"/>
			</div>

			<div className="assumption">
				<label htmlFor="TaxesAssumptions">Taxes</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="TaxesAssumptions" />
			</div>

			<div className="assumption">
				<label htmlFor="interestAssumptions">Interest Rate</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="interestAssumptions" />
			</div>

			<div className="assumption">
				<label htmlFor="inflationAssumptions">Inflation</label>
				<input type="number" placeholder="Growth/Decline rate (%)" id="inflationAssumptions" />
			</div>

			<div className="assumption">
				<label htmlFor="moreOrLessRegulation">Regulation</label>
				<select name="moreOrLessRegulation" id="moreOrLessRegulation">
					<option value="More">More</option>
					<option value="Less">Less</option>
				</select>
			</div>
		</div>
	
	</Container>
}

const Container = styled.div`
position: fixed;
height: 100%;
width: 200px;
z-index: 1;
top: 0;
right: 0;
overflow-x: hidden;
padding-top: 20px;
background-color: #252525;
.assumptionsContainer{
	width: 100%;
	.assumptionsHeader{
		width: 100%;
		h3{
			font-size: 34px;
		}
		h4{
			font-size: 21.01px;
			color: #FFFFFF;
		}
		.title{
			color: #FFFFFF;
		}

	}
	.assumption{
		color: #FFFFFF;
		display: grid;
		grid-template-columns: 1fr 1fr;
		input{
			width: 100%;
			border: none;
			border-bottom: 2px solid #FFFFFF;
		}
		select{
			width: 100%;
			border: none;
			border-bottom: 2px solid #FFFFFF;
		}
	}
}`;