const Input = ({label, inputType, onChangeInputValue}: {label: string, inputType: string, onChangeInputValue: any}) => {

    return (
        <div className="input-group-container">
            <label htmlFor={label}>{label}</label>
            <input
                type={inputType}
                onChange={onChangeInputValue}
            />
        </div>
    )
}

export default Input;