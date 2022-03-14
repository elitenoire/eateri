import AuthForm from './AuthForm'

export default function LoginForm() {
    return (
        <AuthForm
            title="Log in"
            subtitle="Order food and enjoy great rewards."
            altPath="/signup"
            altPathName="Sign up"
            altPathPrompt="New here?"
        />
    )
}
