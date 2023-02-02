
export const Button = ({ isButtonDisabled, onClick, children }) => {
    return (
        <button
            className='btn btn--primary'
            {...(isButtonDisabled() && { disabled: true })}
            {...(isButtonDisabled() && { "aria-disabled": "true" })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}