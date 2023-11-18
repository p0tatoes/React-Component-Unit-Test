const Textbox = ({ id, type, onChangeCallback }) => {
    return (
        <label
            htmlFor={id}
            className='flex flex-col'
        >
            <span className='text-sm font-thin capitalize text-zinc-800'>
                {id}
            </span>
            <input
                type={type}
                id={id}
                name={id}
                data-testid={id + '-inputbox'}
                onChange={onChangeCallback}
                className='bg-zinc-200 px-9 py-2 rounded-md text-center'
            />
        </label>
    )
}

export default Textbox
