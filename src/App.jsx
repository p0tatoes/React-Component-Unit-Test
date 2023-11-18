import Form from './components/Form'

const App = () => {
    return (
        <div
            data-testid='app-container'
            className='flex h-screen items-center justify-center bg-zinc-100'
        >
            <Form />
        </div>
    )
}

export default App
