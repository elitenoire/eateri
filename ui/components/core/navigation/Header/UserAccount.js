import UserOnboard from './UserOnboard'
import UserMenu from './UserMenu'

export default function UserAccount() {
    // TODO: Check if user exists to show either one
    return (
        <>
            <UserOnboard />
            <UserMenu />
        </>
    )
}
