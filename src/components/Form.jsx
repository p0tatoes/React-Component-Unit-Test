import { useState } from 'react'
import Textbox from './Textbox'
import DisabledButton from './DisabledButton'

const Form = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleInputs = (e) => {
        if (e.target.id == 'username') setUsername(e.target.value)
        if (e.target.id == 'password') setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (username === 'root' && password === 'root')
            alert('Login Successful')
        else alert('Login Failed')
    }

    //! To be removed
    // useEffect(() => {
    //     if (username != '' && password != '')
    //         document.getElementById('submitButton').disabled = false
    //     else document.getElementById('submitButton').disabled = true
    // }, [username, password])

    return (
        <div
            data-testid='form-container'
            className='p-32 shadow-xl rounded-xl flex flex-col gap-9 items-center justify-center bg-white'
        >
            <h1 className='font-black text-3xl'>LOGIN</h1>
            <form
                className='flex flex-col gap-4 items-center justify-center'
                onSubmit={handleSubmit}
            >
                <Textbox
                    id='username'
                    type='text'
                    onChangeCallback={handleInputs}
                />
                <Textbox
                    id='password'
                    type='password'
                    onChangeCallback={handleInputs}
                />
                <DisabledButton
                    id='submit'
                    type='submit'
                    text='Login'
                    disabled={!username || !password}
                />
            </form>
        </div>
    )
}

export default Form
