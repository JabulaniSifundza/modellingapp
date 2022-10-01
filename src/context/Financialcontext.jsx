import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const Financialcontext = createContext();

export const FinancialInfoContextProvider = (props) =>{

	const [findoc, setFindoc] = useState();
	

	const getCompany = async (url) =>{
		try{
			const {data} = await axios(url);
			if(data){
				setFindoc(data)
			}
			else{
				setFindoc([])
			}
		}
		catch(error){

		}
	}


	useEffect(()=>{
		setFindoc();
	}, [findoc]);

	return <Financialcontext.Provider value={{getCompany}}>
	{props.children}
	</Financialcontext.Provider>

}