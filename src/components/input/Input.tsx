const Input = (
    {label, inputType, onChangeInputValue, errorValue}:
    {label: string, inputType: string, onChangeInputValue: any, errorValue: boolean}
) => {

    return (
        <div className="input-group-container">
            <label htmlFor={label}>{label}</label>
            <input
                type={inputType}
                onChange={onChangeInputValue}
            />
            {errorValue && <span className="error-message">Negative value is not allowed</span>}
        </div>
    )
}

export default Input;