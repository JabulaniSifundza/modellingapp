import React from 'react';
import {useContext} from 'react';
import styled from "styled-components";
import NewModel from '../components/NewModel';
import {FinancialInfoContextProvider} from '../context/Financialcontext';


export default function CreatedModel() {


	return (
		<Container>
			<FinancialInfoContextProvider>
				<NewModel />
			</FinancialInfoContextProvider>
		</Container>

	)

}

const Container = styled.div``