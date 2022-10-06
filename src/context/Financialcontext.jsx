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


	
	
	useEffect(()=>{
		fetchInfo();
	});


	

	return <Financialcontext.Provider value={{fetchInfo, income, balance, cash, sales, costs, interest, setSales, inflation, regulation, setCosts, setInterest, setinflation, setRegulation}}>
	{children}
	</Financialcontext.Provider>

}