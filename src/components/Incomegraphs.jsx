import React from 'react';
import styled from "styled-components";
import {useContext} from 'react';
import {Financialcontext} from '../context/Financialcontext';
import Chart from 'react-apexcharts';


export default function Incomegraphs(){

	const {income, balance, cash} = useContext(Financialcontext);

	let netIncome = income.map((incomeData)=>{
		return incomeData.netIncome;
	});

	let orderIncome = netIncome.reverse();
	
	let liabilities = balance.map((sheet)=>{
		return sheet.totalLiabilities;
	})
	let orderLiabilities = liabilities.reverse();

	let cashFlow = cash.map((statement)=>{
		return statement.cashAtEndOfPeriod;
	})

	let orderCash = cashFlow.reverse();

	const series =[{
			name: "Net Income",
			type: 'area',
			data: orderIncome
		},
		{
			name: "Total Liabilities",
			type: 'bar',
			data: orderLiabilities	
		},
		{
			name: "Cash at the end of Period",
			type: 'line',
			data: orderCash
		}
	]

	const options = {
		chart:{
			height: 500,
			type: 'line',
			stacked: false,
		},
		stroke: {
			width: [0, 2, 5],
			curve: 'smooth'
		},
		plotOptions: {
			bar: {
			  columnWidth: '50%'
			}
		},
		fill: {
			opacity: [0.85, 0.25, 1],
			gradient: {
			  inverseColors: false,
			  shade: 'light',
			  type: "vertical",
			  opacityFrom: 0.85,
			  opacityTo: 0.55,
			  stops: [0, 100, 100, 100]
			}
		},
		labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
		markers: {
			size: 0
		},
		xaxis: {
        	type: 'year',
			labels: {
				style: {
				  colors: "#FFFFFF"
				}
			  }
        },
		yaxis: {
			title: {
			  text: 'Amount',
			},
			min: 0,
			labels: {
				style: {
				  colors: "#FFFFFF"
				}
			  }
		},
		tooltip: {
			shared: true,
			intersect: false,
			y: {
				formatter: function (y) {
				if (typeof y !== "undefined") {
					return y.toFixed(0) + " Dollars";
				}
				return y;
				}
			}
		}

	}
	return <Container>
		<Chart options ={options} series={series} width="70%" />
	</Container>
}

const Container = styled.div`
margin-left: 190px;
font-family: 'Segoe UI';
`