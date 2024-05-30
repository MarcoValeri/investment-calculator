import {calculateInvestmentResults, formatter} from '../../util/investment.ts';

const Result = (
    {getInitialInvestment, getAnnualInvestment, getExpectedReturn, getDuration}:
    {getInitialInvestment: number, getAnnualInvestment: number, getExpectedReturn: number, getDuration: number}
) => {

    getInitialInvestment = Number(getInitialInvestment);
    getAnnualInvestment = Number(getAnnualInvestment);
    getExpectedReturn = Number(getExpectedReturn);
    getDuration = Number(getDuration);

    const calculateInvestments = calculateInvestmentResults(
        {
            initialInvestment: getInitialInvestment,
            annualInvestment: getAnnualInvestment,
            expectedReturn: getExpectedReturn,
            duration: getDuration
        }
    );

    const arrInterestYera: number[] = [];

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
                    const setInvestmentValue = result.valueEndOfYear;

                    const setInterest = result.interest;

                    let setAnnualInvestment;
                    if (index > 0) {
                        setAnnualInvestment = result.interest + arrInterestYera[index - 1];
                        arrInterestYera.push(setAnnualInvestment);
                    } else {
                        setAnnualInvestment = result.interest;
                        arrInterestYera.push(result.interest);
                    }
                    
                    const setValueEndOfYer = result.valueEndOfYear - setAnnualInvestment;
                    return (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td>{formatter.format(setInvestmentValue)}</td>
                            <td>{formatter.format(setInterest)}</td>
                            <td>{formatter.format(setAnnualInvestment)}</td>
                            <td>{formatter.format(setValueEndOfYer)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Result;