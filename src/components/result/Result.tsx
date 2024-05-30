import {calculateInvestmentResults, formatter} from '../../util/investment.ts';

const Result = (
    {getInitialInvestment, getAnnualInvestment, getExpectedReturn, getDuration}:
    {getInitialInvestment: number, getAnnualInvestment: number, getExpectedReturn: number, getDuration: number}
) => {

    const calculateInvestments = calculateInvestmentResults(
        {
            initialInvestment: getInitialInvestment,
            annualInvestment: getAnnualInvestment,
            expectedReturn: getExpectedReturn,
            duration: getDuration
        }
    );

    return (
        <table id="result">
            <thead className="center">
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody className="center">
                {calculateInvestments.map((result, index) => {
                    const setInvestmentValue = Math.floor(result.valueEndOfYear + result.annualInvestment);
                    const setInterest = formatter.format(result.interest);
                    const setAnnualInvestment = formatter.format(result.annualInvestment);
                    const setValueEndOfYer = formatter.format(result.valueEndOfYear);
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{setInvestmentValue}</td>
                            <td>{setInterest}</td>
                            <td>{setAnnualInvestment}</td>
                            <td>{setValueEndOfYer}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Result;