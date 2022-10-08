import React, {useState} from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';
import { useNavigate } from "react-router-dom";



export default function Searchbar() {
	const [search, setSearch] = useState();
	const {fetchInfo, income} = useContext(Financialcontext);
	const {sales, costs, interest, inflation, regulation, setSales, setCosts, setInterest, setinflation, setRegulation, CreateProjections} = useContext(Financialcontext);
	const navigate = useNavigate();
	


	function fuckUpAcomma(n){
		var numerals = n.toString().split(".");

		const numberPart = numerals[0];
		const decimalPart = numerals[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return numberPart.replace(thousands,",") + (decimalPart ? "." + decimalPart: "");
	}

  return (<Container>
			<div className="searchForm">
				<input type="text" id="search" value={search} placeholder="Search Company by Ticker" className="searchInput" onChange={(e) => setSearch(e.target.value)}/>
				<button className="searchBtn" onClick={(e) => fetchInfo(search)}>Search</button>
			</div>
		{
			
			income.map((financialData)=>{
				return (
					<div className="companyIncome">
						<section key={financialData.fillingDate} className="yearlyIncomeMetrics">
						<div className="incomeState">
							<div className="calendarYear">
								<h3>{financialData.calendarYear}</h3>
								<p>filed: {financialData.fillingDate}</p>
							</div>
							<div className="metricCont">
								<div className="expenseMetrics">
									
									<h4>Cost of Revenue</h4>
									<h3>$ {fuckUpAcomma(financialData.costOfRevenue)}</h3>
									<h4>Interest Expense</h4>
									<h3>$ {fuckUpAcomma(financialData.interestExpense)}</h3>
									<h4>Selling, General and Administrative costs</h4>
									<h3>$ {fuckUpAcomma(financialData.sellingGeneralAndAdministrativeExpenses)}</h3>
									<h4>Research and Development</h4>
									<h3>$ {fuckUpAcomma(financialData.researchAndDevelopmentExpenses)}</h3>
									
								</div>
								<div className="incomeMetrics">
								
									<h4>Revenue</h4>
									<h3>$ {fuckUpAcomma(financialData.revenue)}</h3>
									<h4>Interest Income</h4>
									<h3>$ {fuckUpAcomma(financialData.interestIncome)}</h3>
									<h4>Operating Income</h4>
									<h3>$ {fuckUpAcomma(financialData.operatingIncome)}</h3>
									<h4>Net Income</h4>
									<h3>$ {fuckUpAcomma(financialData.netIncome)}</h3>
									
								</div>
						</div>
						
					</div>
						</section>
					</div>
				)
			})	
		}
		<div className="container">
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
			<button className="generateModel" onClick={()=>{
				CreateProjections();
				navigate("/createdModel");
			}}>Create Model</button>
		</div>
	</div>

	

	</Container>
  );
}

const Container = styled.div`
margin-left: 190px;
font-family: 'Segoe UI';
width: 78%;
background-color: #252525;
overflow-x: hidden;
padding-bottom: 12px;
color: #FFFFFF;
.container {
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
	}
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
	}
.searchForm{
	width: 100%;
	margin-top: 10px;
	margin-bottom: 10px;
	.searchInput{
		width: 100%;
		padding-top: 8px;
		color: #FFFFFF;
		border: none;
		border-bottom: 2px solid #FFFFFF;
		font-size: 18px;
		background-color: #252525;
		margin-left: 6px;
	}
	.searchBtn{
		width: 120px;
		height: 40px;
		background-color: #3772FF;
		color: #FFFFFF;
		margin-right: 910px;
		margin-top: 12px;
		border: none;
		border-radius: 4px;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		cursor: pointer;
		font-size: 18px;
	}
}
.yearlyIncomeMetrics{
	width: 90%;
	border-radius: 4px;
	margin-top: 16px;
	border-bottom: 2px solid #FFFFFF;
	.incomeState{
		margin-top: 16px;
		width: 90%;
		.calendarYear{
			width: 100%;
			text-align: center;
			height:;
			top: 0
			h3{
				font-size:18px;
				margin-right: auto;
				margin-left: auto;
			}
			p{
				font-size:14px;
				margin-right: auto;
				margin-left: auto;
			}
		}
		.metricCont{
			display: grid;
			grid-template-columns: 1fr 1fr;
			
			text-align: center;
			.expenseMetrics{
				display: flex;
				border-right: 1px solid #FFFFFF;
				flex-direction: column;
				h4{
					font-size: 14px;
				}
				h3{
					font-size:18px;
					margin-top: -20px;
				}
			}
			.incomeMetrics{
				display: flex;
				flex-direction: column;
				h4{
					font-size: 14px;
				}
				h3{
					margin-top: -20px;
					font-size: 18px;
				}
			}
		}

	}

}`;
