import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';

export default function NewModel(){

	const {newModel} = useContext(Financialcontext);

	function fuckUpAcomma(n){
		var numerals = n.toString().split(".");

		const numberPart = numerals[0];
		const decimalPart = numerals[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return numberPart.replace(thousands,",") + (decimalPart ? "." + decimalPart: "");
	}
	
	
	return <Container>
		<div>
			<h3>Model Summary</h3>
			<p></p>
		</div>
		{
			newModel.map((projections)=>{
				return (
					<div className="companyIncome">
						<section className="yearlyIncomeMetrics">
							<div className="incomeState">
								<div className="calendarYear">
									<h3>{projections.calendarYear}</h3>
								</div>
								<div className="metricCont">
									<div className="expenseMetrics">
										<h4>Cost of Revenue</h4>
										<h3>$ {fuckUpAcomma(projections.cogs)}</h3>

										<h4>Interest Expense</h4>
										<h3>$ {fuckUpAcomma(projections.interestExp)}</h3>									

										<h4>Selling, General and Administrative costs</h4>
										<h3>$ {fuckUpAcomma(projections.sga)}</h3>
									</div>
								</div>


								<div className="incomeMetrics">
									<h4>Revenue</h4>
									<h3>{fuckUpAcomma(projections.revenue)}</h3>

									<h4>Interest Income</h4>
									<h3>{fuckUpAcomma(projections.interestInc)}</h3>

									<h4>Net Income</h4>
									<h3>{fuckUpAcomma(projections.income)}</h3>
								</div>
							</div>
						</section>
					
					</div>
				)
			})
		}
	</Container>
}

const Container = styled.div`
margin-right: auto;
margin-left: auto;
font-family: 'Segoe UI';
width: 80%;
background-color: #252525;
overflow-x: hidden;
padding-bottom: 12px;
color: #FFFFFF;
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
			height:;
			top: 0
			h3{
				font-size:18px;
			}
			p{
				font-size:14px;
			}
		}
		.metricCont{
			display: grid;
			grid-template-columns: 1fr 1fr;
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

}

`