import Input from "../input/Input";

const UserInput = (
    {onDataFromInputInitialInvestment, onDataFromInputExpectedReturn, onDataFromInputAnnualInvestment, onDataFromInputDuration}:
    {onDataFromInputInitialInvestment: any, onDataFromInputExpectedReturn: any, onDataFromInputAnnualInvestment: any, onDataFromInputDuration: any}
) => {

    const handleChangeValueInputInitialInvestment = (e: any) => {
        onDataFromInputInitialInvestment(e.target.value);
    }

    const handleChangeValueInputExpectedReturn = (e: any) => {
        onDataFromInputExpectedReturn(e.target.value);
    }

    const handleChangeValueInputAnnualInvestment = (e: any) => {
        onDataFromInputAnnualInvestment(e.target.value);
    }

    const handleChangeValueInputDuration = (e: any) => {
        onDataFromInputDuration(e.target.value);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <Input
                        label="Initial investment"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputInitialInvestment}
                        />
                    <Input
                        label="Expected return"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputExpectedReturn}
                    />
                </div>
                <div>
                    <Input
                        label="Annual investment"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputAnnualInvestment}
                    />
                    <Input
                        label="Duration"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInputDuration}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserInput;