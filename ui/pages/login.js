import LoginForm from '~@custom/auth/LoginForm'
import { getLayout as getAuthLayout } from '~@common/layout/AuthLayout'

function LoginPage() {
    return <LoginForm />
}

LoginPage.getLayout = getAuthLayout

export default LoginPage
