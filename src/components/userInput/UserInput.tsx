import Input from "../input/Input";

const UserInput = () => {

    const handleChangeValueInput = (e: any) => {
        console.log(e.target.value);
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <Input
                        label="Initial investment"
                        inputType="text"
                        onChangeInputValue={handleChangeValueInput}
                        />
                    <Input
                        label="Expected return"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInput}
                    />
                </div>
                <div>
                    <Input
                        label="Annual investment"
                        inputType="number"
                        onChangeInputValue={handleChangeValueInput}
                    />
                    <Input
                        label="Duration"
                        inputType="text"
                        onChangeInputValue={handleChangeValueInput}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserInput;