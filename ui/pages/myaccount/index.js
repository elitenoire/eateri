import { Text } from '~@core/typography'
import { getLayout as getAccountLayout } from '~@common/layout/AccountLayout'

function MyAccountPage() {
    return (
        <div>
            <Text>MY ACCOUNT</Text>
        </div>
    )
}

MyAccountPage.getLayout = getAccountLayout

export default MyAccountPage
