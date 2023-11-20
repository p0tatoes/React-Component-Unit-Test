const DisabledButton = ({ id, type, text, disabled, clickFn }) => {
    return (
        <button
            type={type}
            id={id}
            data-testid={id + '-button'}
            className='bg-amber-300 w-fit px-16 py-2 rounded-full font-bold text-white disabled:bg-zinc-600'
            disabled={disabled}
            onClick={clickFn}
        >
            {text}
        </button>
    )
}

export default DisabledButton
