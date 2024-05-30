import {calculateInvestmentResults} from '../../util/investment.ts';

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
                    return (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td></td>
                            <td>{result.interest}</td>
                            <td>{result.annualInvestment}</td>
                            <td>{result.valueEndOfYear}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Result;