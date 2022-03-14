import LoginForm from '~@custom/auth/LoginForm'
import { getLayout as getAuthLayout } from '~@common/layout/AuthLayout'

function LoginPage() {
    return <LoginForm />
}

LoginPage.getLayout = page => getAuthLayout(page, { altPath: '/signup', altPathName: 'Sign Up' })

export default LoginPage
