import AuthForm from './AuthForm'

export default function LoginForm() {
    return (
        <AuthForm
            title="Sign up"
            subtitle="Let's create your eateri account."
            altPath="/login"
            altPathName="Log in"
            altPathPrompt="Have an account?"
        />
    )
}
