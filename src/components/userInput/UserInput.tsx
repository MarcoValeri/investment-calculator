import { useState } from "react";
import Input from "../input/Input";

const UserInput = (
    {onDataFromInputInitialInvestment, onDataFromInputExpectedReturn, onDataFromInputAnnualInvestment, onDataFromInputDuration}:
    {onDataFromInputInitialInvestment: any, onDataFromInputExpectedReturn: any, onDataFromInputAnnualInvestment: any, onDataFromInputDuration: any}
) => {

    const [initialInvestmentInput, setInitialInvestmentInput] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleChangeValueInputInitialInvestment = (e: any) => {
        onDataFromInputInitialInvestment(e.target.value);
        setInitialInvestmentInput((e.target.value));
    }

    const handleChangeValueInputExpectedReturn = (e: any) => {
        onDataFromInputExpectedReturn(e.target.value);
        setExpectedReturn(e.target.value);
    }

    const handleChangeValueInputAnnualInvestment = (e: any) => {
        onDataFromInputAnnualInvestment(e.target.value);
        setAnnualInvestment(e.target.value);
    }

    const handleChangeValueInputDuration = (e: any) => {
        onDataFromInputDuration(e.target.value);
        setDuration(e.target.value);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <Input
                        label="Initial investment"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputInitialInvestment}
                        errorValue={initialInvestmentInput < 0 ? true : false}
                        />
                    <Input
                        label="Expected return"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputExpectedReturn}
                        errorValue={expectedReturn < 0 ? true : false}
                    />
                </div>
                <div>
                    <Input
                        label="Annual investment"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputAnnualInvestment}
                        errorValue={annualInvestment < 0 ? true : false}
                    />
                    <Input
                        label="Duration"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputDuration}
                        errorValue={duration < 0 ? true : false}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserInput;