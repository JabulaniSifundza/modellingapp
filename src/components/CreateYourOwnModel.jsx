import React, {useState, useEffect} from 'react';
import styled from "styled-components";


export default function CreateYourOwnModel(){
	
	const [company, setCompany] = useState();
	const [revenue, setRevenue] = useState();
	const [cogs, setCogs] = useState();
	const [sga, setSGA] = useState();
	const [marketing, setMarketing] = useState();
	const [research, setResearch] = useState();
	const [depreciation, setDepreciation] = useState();


	const [taxation, setTaxation] = useState();
	const [net, setNet] = useState(); 
	const [operating, setOperating] = useState();
	const [grossIncome, setgrossIncome] = useState();

	const [grossMargin, setGrossMargin] = useState();
	const [netMargin, setNetMargin] = useState();
	const [operatingMargin, setOperatingMargin] = useState();

	const calcTax = (income)=>{
		return 0.21 * income;
	}

	const calcNet = (ebita, tax)=>{
		return ebita - tax;
		
	}

	const calcOperating = (gross, sga, marketing, depreciation, research)=>{
		return gross - (sga + marketing + depreciation + research);
	}

	const calcGross =(rev, cogs)=>{
		return rev - cogs;
	}

	const calcGrossMargin = (rev, cogs) =>{
		return (rev - cogs)/rev;
	}

	const calcOperatingMargin = (operate, rev) =>{
		return operate/rev;
	}

	const calcNetMargin = (net, rev)=>{
		return (net/rev)*100;
	}



	setTaxation(calcTax);
	setNet(calcNet);
	setOperating(calcOperating);
	setgrossIncome(calcGross);

	setGrossMargin(calcGrossMargin);
	setNetMargin(calcNetMargin);
	setOperatingMargin(calcOperatingMargin);


	




	useEffect(()=>{
		calcTax();
		calcNet();
		calcOperating();
		calcGross();
		calcGrossMargin();
		calcNetMargin();
		calcOperatingMargin();

	});
	


	return (
		<Container>
			<div className="statementTitle">
				<input type="text" className="companyName" value={company} onChange={(e)=> setCompany(e.target.value)}/>
				<h3>Income Statement</h3>
				<p></p>
			</div>
			<div className="desiredStatement">
				<h5>Revenue</h5>
				<input type="number" className="amount" value={revenue} onChange={(e)=> setRevenue(e.target.value)}/>

				<h5>Cost of Revenue</h5>
				<input type="number" className="amount" value={cogs}  onChange={(e)=> setCogs(e.target.value)}/>
			
				<h5>Gross Income</h5>
				<span className="calculatedAmnt"  value={grossIncome}>{calcGross(revenue, cogs)}</span>

				<h5>Selling, General and Administrative</h5>
				<input type="number" className="amount"  value={sga}  onChange={(e)=> setSGA(e.target.value)}/>

				<h5>Marketing Expense</h5>
				<input type="number" className="amount" value={marketing}  onChange={(e)=> setMarketing(e.target.value)}/>

				<h5>Research and Development</h5>
				<input type="number" className="amount" value={research}  onChange={(e)=> setResearch(e.target.value)}/>

				<h5>Depreciation</h5>
				<input type="number" className="amount" value={depreciation} onChange={(e)=> setDepreciation(e.target.value)}/>

				<h5>EBITA</h5>
				<span className="calculatedAmnt" value={operating}>{calcOperating(grossIncome, sga, marketing, research, depreciation)}</span>

				<h5>Tax Expense</h5>
				<span className="calculatedAmnt" value={taxation}>{calcTax(operating)}</span>

				<h5>Net Income</h5>
				<span className="calculatedAmnt" value={net}>{calcNet(operating, taxation)}</span>
			</div>

			<div className="financialRatios">
				<div>
					<h3>Financial Ratios</h3>
					<p></p>
				</div>

				<div>
					<h6>Gross Margin</h6>
					<span className="calculatedAmnt" value={grossMargin}>{calcGrossMargin(revenue, cogs)}</span>
					<h6>Operating Margin</h6>
					<span className="calculatedAmnt" value={operatingMargin}>{calcOperatingMargin(operating, revenue)}</span>
					<h6>Net Margin</h6>
					<span className="calculatedAmnt" value={netMargin}>{calcNetMargin(net, revenue)}</span>
				</div>
			
			</div>
		
		</Container>
	)


}
const Container = styled.div``