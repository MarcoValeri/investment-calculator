import { useState } from "react";

import Header from "./components/header/Header";
import Result from "./components/result/Result";
import UserInput from "./components/userInput/UserInput";

import {formatter} from "../src/util/investment";

const App = () => {

    const [initialInvestment, setInitialInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleDataFromInputInitialInvestment = (getInitialInvestment: any) => {
        setInitialInvestment(getInitialInvestment);
    }

    const handleDataFromInputExpectedReturn = (getExpectedReturn: any) => {
        setExpectedReturn(getExpectedReturn);
    }

    const handleDataFromInputAnnualInvestment = (getAnnualInvestment: any) => {
        setAnnualInvestment(getAnnualInvestment);
    }

    const handleDataFromInputDuration = (getDuration: any) => {
        setDuration(getDuration);
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