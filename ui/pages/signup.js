import SignupForm from '~@custom/auth/SignupForm'
import { getLayout as getAuthLayout } from '~@common/layout/AuthLayout'

function SignupPage() {
    return <SignupForm />
}

SignupPage.getLayout = getAuthLayout

export default SignupPage
