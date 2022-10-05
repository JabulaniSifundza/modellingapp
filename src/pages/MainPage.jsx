import React from "react";
import styled from "styled-components";
import Searchbar from '../components/Searchbar';
import Incomegraphs from '../components/Incomegraphs';
import Assetchart from '../components/Assetchart';
import Cashchart from '../components/Cashchart';
import Sidebar from '../components/Sidebar';
import {FinancialInfoContextProvider} from '../context/Financialcontext';

export default function MainPage(){
	return (
		<Container>
			<FinancialInfoContextProvider>
				<Sidebar />
				<Searchbar />
				<Incomegraphs />
				<Assetchart />
				<Cashchart />
			</FinancialInfoContextProvider>
		</Container>
	)
}

const Container = styled.div``