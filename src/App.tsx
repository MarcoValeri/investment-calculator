import { useState } from "react";

import Header from "./components/header/Header";
import Result from "./components/result/Result";
import UserInput from "./components/userInput/UserInput";

const App = () => {

    const [initialInvestment, setInitialInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleDataFromInputInitialInvestment = (getInitialInvestment: any) => {
        setInitialInvestment(getInitialInvestment);
        // console.log(`initialInvestment: ${initialInvestment}`);
    }

    const handleDataFromInputExpectedReturn = (getExpectedReturn: any) => {
        setExpectedReturn(getExpectedReturn);
        // console.log(`expectedReturn: ${expectedReturn}`);
    }

    const handleDataFromInputAnnualInvestment = (getAnnualInvestment: any) => {
        setAnnualInvestment(getAnnualInvestment);
        // console.log(`annualInvestment: ${annualInvestment}`);
    }

    const handleDataFromInputDuration = (getDuration: any) => {
        setDuration(getDuration);
        // console.log(`duration: ${duration}`);
    }

    return (
        <>
            <Header title="Investment Calculator" />
            <UserInput
                onDataFromInputInitialInvestment={handleDataFromInputInitialInvestment}
                onDataFromInputExpectedReturn={handleDataFromInputExpectedReturn}
                onDataFromInputAnnualInvestment={handleDataFromInputAnnualInvestment}
                onDataFromInputDuration={handleDataFromInputDuration}
            />
            <Result
                getInitialInvestment={initialInvestment}
                getAnnualInvestment={annualInvestment}
                getExpectedReturn={expectedReturn}
                getDuration={duration}
            />
        </>
    )
}

export default App;