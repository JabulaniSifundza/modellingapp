import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';

export default function NewModel(){

	const {income, sales, costs, interest,inflation, regulation} = useContext(Financialcontext);


	function fuckUpAcomma(n){
		var numerals = n.toString().split(".");

		const numberPart = numerals[0];
		const decimalPart = numerals[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return numberPart.replace(thousands,",") + (decimalPart ? "." + decimalPart: "");
	}

	
	let newModel = []

	const CreateProjections = (income, sales, costs, interest, inflation) =>{
			let revenueMax = Math.max.apply(Math, income.map((rev)=>{
				return rev.revenue
			}));
		
			let incomeMax = Math.max.apply(Math, income.map((prof)=>{
				return prof.netIncome
			}));
		
			let interestExpMax = Math.max.apply(Math, income.map((prof)=>{
				return prof.interestExpense
			}));
		
			let interestIncMax = Math.max.apply(Math, income.map((prof)=>{
				return prof.interestIncome
			}));
		
			let cogsMax = Math.max.apply(Math, income.map((rev)=>{
				return rev.costOfRevenue
			}));
		
			let sgaMax = Math.max.apply(Math, income.map((rev)=>{
				return rev.sellingGeneralAndAdministrativeExpenses
			}));


			let salesRate = (sales/100) + 1;
			let costsRate = (costs/100) + 1;
			let interestRate = (interest/100) + 1;
			let inflationRate = (inflation/100) + 1;
		
			let regEffect = ()=>{
				return (regulation === "More" ? salesRate = (salesRate + 0.02) : salesRate = (salesRate - 0.02));
			}

		let projectionsYear1 = ()=>{
			let firstYear = {};
			regEffect();
			firstYear.revenue = (salesRate*revenueMax) + (inflationRate*revenueMax);
			firstYear.income = salesRate*incomeMax;
			firstYear.interestExp = interestRate*interestExpMax;
			firstYear.interestInc = interestRate*interestIncMax;
			firstYear.cogs = costsRate*cogsMax;
			firstYear.sga = (costsRate*sgaMax) + (inflationRate*sgaMax);
			firstYear.year = 2024;
			

			return firstYear;

		}

		let projectionsYear2 = ()=>{
			let yearTwo = {};
			regEffect();
			yearTwo.revenue = (salesRate^2)*revenueMax + ((inflationRate^2)*revenueMax);
			yearTwo.income = (salesRate^2)*incomeMax;
			yearTwo.interestExp =(interestRate^2)*interestExpMax;
			yearTwo.interestInc =(interestRate^2)*interestIncMax;
			yearTwo.cogs = (costsRate^2)*cogsMax;
			yearTwo.sga = ((costsRate^2)*sgaMax) + ((inflationRate^2)*sgaMax);
			yearTwo.year = 2024;
		

			return yearTwo;
		}
		let projectionsYear3 = ()=>{
			let yearThree = {};
			regEffect();
			yearThree.revenue = (salesRate^3)*revenueMax + ((inflationRate^3)*revenueMax);
			yearThree.income = (salesRate^3)*incomeMax;
			yearThree.interestExp = (interestRate^3) * interestExpMax;
			yearThree.interestInc =(interestRate^3)*interestIncMax;
			yearThree.cogs = (costsRate^3)*cogsMax;
			yearThree.sga = ((costsRate^3)*sgaMax) + ((inflationRate^3)*sgaMax);
			yearThree.year = 2025;


			return yearThree;
		}
		let projectionsYear4 = ()=>{
			let yearFour = {};
			regEffect();
			yearFour.revenue = (salesRate^4)*revenueMax + ((inflationRate^4)*revenueMax);
			yearFour.income = (salesRate^4)*incomeMax;
			yearFour.interestExp = (interestRate^4) * interestExpMax;
			yearFour.interestInc =(interestRate^4)*interestIncMax;
			yearFour.cogs = (costsRate^4)*cogsMax;
			yearFour.sga = ((costsRate^4)*sgaMax) + ((inflationRate^4)*sgaMax);
			yearFour.year = 2026; 

			return yearFour;

		}
		let projectionsYear5 = ()=>{
			let yearFive = {};
			regEffect();
			yearFive.revenue = (salesRate^5)*revenueMax + ((inflationRate^5)*revenueMax);
			yearFive.income = (salesRate^5)*incomeMax;
			yearFive.interestExp = (interestRate^5) * interestExpMax;
			yearFive.interestInc =(interestRate^5)*interestIncMax;
			yearFive.cogs = (costsRate^5)*cogsMax;
			yearFive.sga = ((costsRate^5)*sgaMax) + ((inflationRate^5)*sgaMax);
			yearFive.year = 2027;
			

			return yearFive;
			
		}
		newModel = [...newModel, projectionsYear1, projectionsYear2, projectionsYear3, projectionsYear4, projectionsYear5];
		console.log(newModel)
		//newModel.push(projectionsYear1, projectionsYear2, projectionsYear3, projectionsYear4, projectionsYear5);
		return newModel;


	}
	CreateProjections(income, sales, costs, interest, inflation);
	
	
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
									<h3 key={projections.year}>{projections.year}</h3>
								</div>
								<div className="metricCont">
									<div className="expenseMetrics">
										<h4>Cost of Revenue</h4>
										<h3 key={projections.cogs}>$ {projections.cogs}</h3>

										<h4>Interest Expense</h4>
										<h3 key={projections.interestExp}>$ {projections.interestExp}</h3>									

										<h4>Selling, General and Administrative costs</h4>
										<h3 key={projections.sga}>$ {projections.sga}</h3>
									</div>
								</div>


								<div className="incomeMetrics">
									<h4>Revenue</h4>
									<h3 key={projections.revenue}>{projections.revenue}</h3>

									<h4>Interest Income</h4>
									<h3 key={projections.interestInc}>{projections.interestInc}</h3>

									<h4>Net Income</h4>
									<h3 key={projections.income}>{projections.income}</h3>
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