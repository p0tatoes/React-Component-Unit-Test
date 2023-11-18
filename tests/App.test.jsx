import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/App'
import DisabledButton from '../src/components/DisabledButton'
import { describe, expect, it, vi } from 'vitest'
import Form from '../src/components/Form'
import Textbox from '../src/components/Textbox'

describe('App', () => {
    it('should render the App', () => {
        render(<App />)
        const appContainer = screen.getByTestId('app-container')
        expect(appContainer).toBeInTheDocument()
    })

    it('should enable the button if two textboxes are typed', () => {
        render(<Form />)
        const usernameInput = screen.getByTestId('username-inputbox')
        const passwordINnput = screen.getByTestId('password-inputbox')
        const submitButton = screen.getByTestId('submit-button')

        fireEvent.change(usernameInput, { target: { value: 'lorem' } })
        fireEvent.change(passwordINnput, { target: { value: 'lorem' } })
        expect(submitButton).toBeEnabled()
    })

    describe('Login Button', () => {
        it('should render the button', () => {
            render(
                <DisabledButton
                    id='submit'
                    type='submit'
                    text='Login'
                    disabled={true}
                />
            )
            const loginButton = screen.getByTestId('submit-button')
            expect(loginButton).toBeInTheDocument()
        })

        it('should be clickable', () => {
            const fn = vi.fn()
            fn('hello')
            render(
                <DisabledButton
                    id='submit'
                    type='submit'
                    text='Login'
                    disabled={true}
                />
            )
            expect(fn).toHaveBeenCalled()
        })

        it('should be disabled', () => {
            render(
                <DisabledButton
                    id='submit'
                    type='submit'
                    text='Login'
                    disabled={true}
                />
            )
            const loginButton = screen.getByTestId('submit-button')
            expect(loginButton).toBeDisabled()
        })

        it('should render the text in the button', () => {
            render(
                <DisabledButton
                    id='submit'
                    type='submit'
                    text='Login'
                    disabled={true}
                />
            )
            const loginButton = screen.getByTestId('submit-button')
            expect(loginButton).toHaveTextContent('Login')
        })
    })

    describe('Textbox', () => {
        it('should be rendered', () => {
            render(
                <Textbox
                    id='username'
                    type='text'
                />
            )
            const textbox = screen.getByRole('textbox', { id: 'username' })
            expect(textbox).toBeInTheDocument()
        })

        it('should be able to type', () => {
            const fn = vi.fn()
            fn('hello')

            render(
                <Textbox
                    id='username'
                    type='text'
                    onkeydown={fn}
                />
            )
            expect(fn).toHaveBeenCalled()
        })

        it('should render the label', () => {
            render(
                <Textbox
                    id='username'
                    type='text'
                />
            )
            const textbox = screen.getByLabelText('username')
            expect(textbox).toBeInTheDocument()
        })
    })
})
