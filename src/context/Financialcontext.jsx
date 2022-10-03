import {createContext, useState, useEffect} from 'react';
import Fmp from '../apis/Fmp';

export const Financialcontext = createContext();

export const FinancialInfoContextProvider = ({children}) =>{
	
	const [income, setIncome] = useState([]);
	const [balance, setBalance] = useState([]);
	const [cash, setCash] = useState([]);

	const [sales, setSales] = useState();
	const [costs, setCosts] = useState();
	const [interest, setInterest] = useState();
	const [inflation, setinflation] = useState();
	const [regulation, setRegulation] = useState();



	

	const fetchInfo = async (name) =>{
		const response = await Fmp.get(`/income-statement/${name}`,{
			params:{
				limit: 120
			}
		});

		const balanceSheet = await Fmp.get(`/balance-sheet-statement/${name}`,{
			params:{
				limit: 120
			}
		});

		const cashFlow = await Fmp.get(`/cash-flow-statement/${name}`,{
			params:{
				limit: 120
			}
		});
		const data = response;
		let finData = data.data;

		const assetData = balanceSheet;
		let balanceSheetData = assetData.data;

		const cashData = cashFlow;
		let cashFlowState = cashData.data;

		
		setIncome(finData);
		setBalance(balanceSheetData);
		setCash(cashFlowState);
	}

	let revenueMax = Math.max.apply(Math, income.map((rev)=>{
		return rev.revenue
	}));

	let incomeMax = Math.max.apply(Math, income.map((prof)=>{
		return prof.netIncome
	}));

	let interestExpMax = Math.max.apply(Math, income.map((prof)=>{
		return prof.interestExpense
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
		firstYear.cogs = costsRate*cogsMax;
		firstYear.sga = (costsRate*sgaMax) + (inflationRate*sgaMax);

		return firstYear;

	}

	let projectionsYear2 = ()=>{
		let yearTwo = {};
		regEffect();
		yearTwo.revenue = (salesRate^2)*revenueMax + ((inflationRate^2)*revenueMax);
		yearTwo.income = (salesRate^2)*incomeMax;
		yearTwo.interestExp =(interestRate^2)*interestExpMax;
		yearTwo.cogs = (costsRate^2)*cogsMax;
		yearTwo.sga = ((costsRate^2)*sgaMax) + ((inflationRate^2)*sgaMax)

		return yearTwo;
	}
	let projectionsYear3 = ()=>{
		let yearThree = {};
		regEffect();
		yearThree.revenue = (salesRate^3)*revenueMax + ((inflationRate^3)*revenueMax);
		yearThree.income = (salesRate^3)*incomeMax;
		yearThree.interestExp = (interestRate^3) * interestExpMax;
		yearThree.cogs = (costsRate^3)*cogsMax;
		yearThree.sga = ((costsRate^3)*sgaMax) + ((inflationRate^3)*sgaMax);
		return yearThree;
	}
	let projectionsYear4 = ()=>{
		let yearFour = {};
		regEffect();
		yearFour.revenue = (salesRate^4)*revenueMax + ((inflationRate^4)*revenueMax);
		yearFour.income = (salesRate^4)*incomeMax;
		yearFour.interestExp = (interestRate^4) * interestExpMax;
		yearFour.cogs = (costsRate^4)*cogsMax;
		yearFour.sga = ((costsRate^4)*sgaMax) + ((inflationRate^4)*sgaMax);

		return yearFour;

	}
	let projectionsYear5 = ()=>{
		let yearFive = {};
		regEffect();
		yearFive.revenue = (salesRate^5)*revenueMax + ((inflationRate^5)*revenueMax);
		yearFive.income = (salesRate^5)*incomeMax;
		yearFive.interestExp = (interestRate^5) * interestExpMax;
		yearFive.cogs = (costsRate^5)*cogsMax;
		yearFive.sga = ((costsRate^5)*sgaMax) + ((inflationRate^5)*sgaMax);

		return yearFive;
	}


	let modelMetrics =[];
	let newModel = [...modelMetrics, projectionsYear1, projectionsYear2, projectionsYear3, projectionsYear4, projectionsYear5]
	useEffect(()=>{
		fetchInfo();
	}, []);


	

	return <Financialcontext.Provider value={{fetchInfo, income, balance, cash, setSales, setCosts, setInterest, setinflation, setRegulation, newModel}}>
	{children}
	</Financialcontext.Provider>

}