import SignupForm from '~@custom/auth/SignupForm'
import { getLayout as getAuthLayout } from '~@common/layout/AuthLayout'

function SignupPage() {
    return <SignupForm />
}

SignupPage.getLayout = page => getAuthLayout(page, { altPath: '/login', altPathName: 'Log In' })

export default SignupPage
