import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Fmp from '../apis/Fmp';

export default function Searchbar() {
	const [search, setSearch] = useState();
	const [company, setCompany] = useState([]);
	const [balance, setBalance] = useState([]);
	const [cash, setCash] = useState([]);

	function fuckUpAcomma(n){
		var numerals = n.toString().split(".");

		const numberPart = numerals[0];
		const decimalPart = numerals[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return numberPart.replace(thousands,",") + (decimalPart ? "." + decimalPart: "");
	}
	

	const fetchCash = async (name) =>{
		const response = await Fmp.get(`/cash-flow-statement/${name}`,{
			params:{
				limit: 120
			}
		});
		const data = response;
		let cashData = data.data;
		setCash(cashData);
	}

	const fetchBalance = async (name) =>{
		const response = await Fmp.get(`/balance-sheet-statement/${name}`,{
			params:{
				limit: 1
			}
		});
		const data = response;
		let balanceSheet = data.data;
		setBalance(balanceSheet);

	}



	const fetchInfo = async (name) =>{
		const response = await Fmp.get(`/income-statement/${name}`,{
			params:{
				limit: 120
			}
		});
		
		const data = response;
		let finData = data.data;
		setCompany(finData)
		

	}
	useEffect(()=>{
		fetchInfo();
	}, []);

	useEffect(()=>{
		fetchCash();
	}, []);

	useEffect(()=>{
		fetchBalance();
	}, []);

  return (<Container>
			<div className="searchForm">
				<input type="text" id="search" value={search} placeholder="Search Company" className="searchInput" onChange={(e) => setSearch(e.target.value)}/>
				<button className="searchComp" onClick={() => fetchInfo(search)}>Search</button>
			</div>
				{
					company.map((financialData)=>{
						return (
							<div>
								<section key={financialData.fillingDate}>
									<h4>Year</h4>
									<h3>{financialData.calendarYear}</h3>
									<p>filed: {financialData.fillingDate}</p>

									<h4>Revenue</h4>
									<h3>{fuckUpAcomma(financialData.revenue)}</h3>

									<h4>Cost of Revenue</h4>
									<h3>{fuckUpAcomma(financialData.costOfRevenue)}</h3>

									<h4>Selling, General and Administrative costs</h4>
									<h3>{fuckUpAcomma(financialData.sellingGeneralAndAdministrativeExpenses)}</h3>

									<h4>Research and Development</h4>
									<h3>{fuckUpAcomma(financialData.researchAndDevelopmentExpenses)}</h3>

									<h4>Interest Expense</h4>
									<h3>{fuckUpAcomma(financialData.interestExpense)}</h3>

									<h4>Interest Income</h4>
									<h3>{fuckUpAcomma(financialData.interestIncome)}</h3>

									<h4>Net Income</h4>
									<h3>{fuckUpAcomma(financialData.netIncome)}</h3>
								</section>
							</div>
						)
					})
					
				}
	</Container>
  );
}

const Container = styled.div`
margin-left: 220px;
margin-top: 10px;
width: 80%;
.searchForm{
	width: 100%;
	.searchInput{
		width: 100%;
		color: #000000;
		border: none;
		border-bottom: 2px solid #FFFFFF;
		font-size: 34px;
	}
	.searchComp{
		width: 60px;
		height: 40px;
		background-color: #3772FF;
		color: #FFFFFF;
	}
}`;
