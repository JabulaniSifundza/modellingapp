import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';
import Chart from 'react-apexcharts';

export default function Cashcharts(){
	const {cash} = useContext(Financialcontext);

	let cashAtEnd = cash.map((cashFlow)=>{
		return cashFlow.cashAtEndOfPeriod
	});

	let cashAtStart = cash.map((cashFlow)=>{
		return cashFlow.cashAtBeginningOfPeriod
	});

	let orderedCashStart = cashAtStart.reverse();
	let orderedCashEnd = cashAtEnd.reverse();


	const series =[{
		name: "Cash at the Start",
		data: orderedCashStart
	}, 
	{
		name: "Cash at the End",
		data: orderedCashEnd
	}]

	const options = {
		chart: {
			height: 500,
			type: 'area'
		},
		dataLabes:{
			enabled: false
		},
		colors:["#FF1654", "#247BA0"],
		stroke: {
			curve: 'smooth'
		},
		xaxis:{
			type: 'year',
			categories:[2017, 2018, 2019, 2020, 2021, 2022, 2023],
			labels: {
				style: {
				  colors: "#FFFFFF"
				}
			}
		},
		yaxis:{
			title: {
				text: 'Amount',
				colors: "#FFFFFF"
			  },
			labels: {
				style: {
				  colors: "#FFFFFF"
				}
			}
		},
		tooltip:{
			x: {
				format: 'YYYY'
			}
		}

	}

	return <Container>
		<div className="titleCont">
			<h3>Starting and Ending Cash Balance</h3>
		</div>
		<Chart options ={options} series={series} width="70%"/>
			
	</Container>


}

const Container = styled.div`
margin-left: 190px;
font-family: 'Segoe UI';
.titleCont{
	margin-left: auto;
	margin-right: auto;
	margin-top: 12px;
	margin-bottom: 12px;
	padding-bottom: 8px;
	h3{
		color: #FFFFFF;
		font-size: 26px;
	}
}
`