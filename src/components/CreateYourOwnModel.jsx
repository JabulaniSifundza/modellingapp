import React, {useState, useEffect} from 'react';
import styled from "styled-components";


export default function CreateYourOwnModel(){
	
	const [company, setCompany] = useState('');
	const [revenue, setRevenue] = useState(0);
	const [cogs, setCogs] = useState(0);
	const [sga, setSGA] = useState(0);
	const [marketing, setMarketing] = useState(0);
	const [research, setResearch] = useState(0);
	const [depreciation, setDepreciation] = useState(0);


	const [taxation, setTaxation] = useState(0);
	const [net, setNet] = useState(0); 
	const [operating, setOperating] = useState(0);
	const [grossIncome, setgrossIncome] = useState(0);

	const [grossMargin, setGrossMargin] = useState(0);
	const [netMargin, setNetMargin] = useState(0);
	const [operatingMargin, setOperatingMargin] = useState(0);

	function fuckUpAcomma(n){
		var numerals = n.toString().split(".");

		const numberPart = numerals[0];
		const decimalPart = numerals[1];
		const thousands = /\B(?=(\d{3})+(?!\d))/g;

		return numberPart.replace(thousands,",") + (decimalPart ? "." + decimalPart: "");
	}

	const calcTax = (rev, sga, marketing, depreciation, research, cogs)=>{
		let lessSga = rev - sga;
		let lessMarket = lessSga - marketing;
		let lessDep = lessMarket - depreciation;
		let lessRes = lessDep - research
		let lessCogs = lessRes - cogs;
		let taxAmnt = Math.round(lessCogs * 0.28);

		return Number(taxAmnt)
		
	}

	const calcNet = (rev, sga, marketing, depreciation, research, cogs)=>{
		let lessSga = rev - sga;
		let lessMarket = lessSga - marketing;
		let lessDep = lessMarket - depreciation;
		let lessRes = lessDep - research
		let lessCogs = lessRes - cogs;
		let taxAmnt = Math.round(lessCogs * 0.28);
		let net = lessCogs - taxAmnt;
		

		return Number(net)
		
	}

	const calcOperating = (rev, sga, marketing, depreciation, research, cogs)=>{
		let lessSga = rev - sga;
		let lessMarket = lessSga - marketing;
		let lessDep = lessMarket - depreciation;
		let lessRes = lessDep - research
		let lessCogs = lessRes - cogs;
		return Number(lessCogs);
	}

	const calcGross =(rev, cogs)=>{
		return rev - cogs;
	}

	const calcGrossMargin = (rev, cogs) =>{
		return (rev - cogs) / rev;
	}

	const calcOperatingMargin = (rev, sga, marketing, depreciation, research, cogs) =>{
		let lessSga = rev - sga;
		let lessMarket = lessSga - marketing;
		let lessDep = lessMarket - depreciation;
		let lessRes = lessDep - research
		let lessCogs = lessRes - cogs;
		let margin = lessCogs/rev;
		return Number(margin)
	}

	const calcNetMargin = (rev, sga, marketing, depreciation, research, cogs)=>{
		let lessSga = rev - sga;
		let lessMarket = lessSga - marketing;
		let lessDep = lessMarket - depreciation;
		let lessRes = lessDep - research
		let lessCogs = lessRes - cogs;
		let taxAmnt = Math.round(lessCogs * 0.28);
		let net = lessCogs - taxAmnt;
		let margin = Math.round((net/rev)*100);
		let ratio = (net/rev);

		return `${ratio} or ${margin}%`;
	}

	useEffect(()=>{
	setTaxation(calcTax);
	setNet(calcNet);
	setOperating(calcOperating);
	setgrossIncome(calcGross);
	

	}, []);
	


	return (
		<Container>
			<div className="statementTitle">
				<input type="text" className="companyName" placeholder="Enter your company name" value={company} onChange={(e)=> setCompany(e.target.value)}/>
				<h3>Income Statement</h3>
				<p></p>
			</div>
			<div className="desiredStatement">
			<div className="statementMetric">
				<h5 className="entry">Revenue</h5>
				<input type="number" className="amount" value={revenue} onChange={(e)=> setRevenue(e.target.value)}/>
			</div>
				
				<div className="statementMetric">
					<h5 className="entry">Cost of Revenue</h5>
					<input type="number" className="amount" value={cogs}  onChange={(e)=> setCogs(e.target.value)}/>
				</div>
				
				<div className="statementMetric">
					<h5 className="entry">Gross Income</h5>
					<span className="calculatedAmnt" value={grossIncome}>{fuckUpAcomma(calcGross(revenue, cogs))}</span>
				</div>
				<div className="statementMetric">
					<h5 className="entry">Selling, General and Administrative</h5>
					<input type="number" className="amount"  value={sga}  onChange={(e)=> setSGA(e.target.value)}/>
				</div>

				<div className="statementMetric">
					<h5 className="entry">Marketing Expense</h5>
					<input type="number" className="amount" value={marketing}  onChange={(e)=> Number(setMarketing(e.target.value))}/>
				</div>
				<div className="statementMetric">
					<h5 className="entry">Research and Development</h5>
					<input type="number" className="amount" value={research}  onChange={(e)=> Number(setResearch(e.target.value))}/>
				</div>
				<div className="statementMetric">
					<h5 className="entry">Depreciation</h5>
					<input type="number" className="amount" value={depreciation} onChange={(e)=> Number(setDepreciation(e.target.value))}/>
				</div>
				<div className="statementMetric">
					<h5 className="entry">EBITA</h5>
					<span className="calculatedAmnt" value={operating}>{fuckUpAcomma(calcOperating(revenue, sga, marketing, research, depreciation, cogs))}</span>
				</div>
				<div className="statementMetric">
					<h5 className="entry">Tax Expense</h5>
					<span className="calculatedAmnt" value={taxation}>{fuckUpAcomma(calcTax(revenue, sga, marketing, research, depreciation, cogs))}</span>
				</div>
				<div className="statementMetric">
					<h5 className="entry">Net Income</h5>
					<span key={net} className="calculatedAmnt" value={net}>{fuckUpAcomma(calcNet(revenue, sga, marketing, research, depreciation, cogs))}</span>
				</div>
			</div>

			<div className="financialRatios">
				<div>
					<h3>Financial Ratios</h3>
					<p></p>
				</div>

				<div>
					<h6>Gross Margin</h6>
					<p className="calculatedAmnt" value={grossMargin}>{calcGrossMargin(revenue, cogs)}</p>
					<h6>Operating Margin</h6>
					<p className="calculatedAmnt" value={operatingMargin}>{calcOperatingMargin(revenue, sga, marketing, research, depreciation, cogs)}</p>
					<h6>Net Margin</h6>
					<p className="calculatedAmnt" value={netMargin}>{calcNetMargin(revenue, sga, marketing, research, depreciation, cogs)}</p>
				</div>
			
			</div>
		
		</Container>
	)


}
const Container = styled.div`
margin-left: 190px;
font-family: 'Segoe UI';
color: #FFFFFF;
background-color: #252525;
.statementTitle{
	margin-left: 25%;
	padding-top: 80px;
	.companyName{
		border-bottom: 2px solid #FFFFFF;
		background-color: #252525;
		color: #FFFFFF;
		border-right: none;
		border-left: none;
		border-top: none;
		width: 300px;
		text-align: center;
		margin-left: -70px;
		font-size: 1.55rem;

	}
}
.desiredStatement{
	display: flex;
	flex-direction: column;
	.statementMetric{
		display: grid;
		grid-template-columns: 1fr 1fr;
		.amount{
			margin-left: -27px;
			align-text: center;
			width: 150px;
			border-bottom: 2px solid #FFFFFF;
			background-color: #252525;
			color: #FFFFFF;
			border-right: none;
			border-left: none;
			border-top: none;
			font-size: 1.05rem;
			align-self: center;
		}
		.entry{
			margin-left: 94px;
			font-size: 1.25rem;
			
			align-self: center;
		}
		.calculatedAmnt{
			font-size: 1.25rem;
			margin-top: 32px;
		}

	}
	
}

`