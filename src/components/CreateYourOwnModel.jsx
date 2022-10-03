import React from 'react';
import styled from "styled-components";


export default function CreateYourOwnModel(){


	return (
		<Container>
			<div className="statementTitle">
				<input type="text" className="companyName" />
				<h3>Income Statement</h3>
				<p></p>
			</div>
			<div className="desiredStatement">
				<h5>Revenue</h5>
				<input type="number" className="amount" />

				<h5>Cost of Revenue</h5>
				<input type="number" className="amount" />
			
				<h5>Gross Income</h5>
				<span className="calculatedAmnt"></span>

				<h5>Selling, General and Administrative</h5>
				<input type="number" className="amount" />

				<h5>Marketing Expense</h5>
				<input type="number" className="amount" />

				<h5>Research and Development</h5>
				<input type="number" className="amount" />

				<h5>Operating Income</h5>
				<span className="calculatedAmnt"></span>

				<h5>Depreciation</h5>
				<input type="number" className="amount" />

				<h5>Tax Expense</h5>
				<span className="calculatedAmnt"></span>

				<h5>Net Income</h5>
				<span className="calculatedAmnt"></span>
			</div>

			<div className="financialRatios">
				<div>
					<h3>Financial Ratios</h3>
					<p></p>
				</div>

				<div>
					<h6>Operating Income</h6>
					<span className="calculatedAmnt"></span>
					<h6>Operating Income</h6>
					<span className="calculatedAmnt"></span>
					<h6>Operating Income</h6>
					<span className="calculatedAmnt"></span>
					<h6>Operating Income</h6>
					<span className="calculatedAmnt"></span>
				</div>
			
			</div>
		
		</Container>
	)


}
const Container = styled.div``