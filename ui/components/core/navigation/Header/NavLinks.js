import { Link } from '~@core/navigation'

const LINK_MAP = [
    {
        name: 'menu',
        href: '/menu',
    },
    {
        name: 'story',
        href: '/our-story',
    },
    {
        name: 'contact',
        href: '#contact',
    },
    {
        name: 'reservations',
        href: '/reserve',
    },
]

export default function NavLinks({ children, ...rest }) {
    return (
        <nav {...rest}>
            <ul>
                {LINK_MAP.map(({ name, href }) => {
                    return (
                        <li key={name}>
                            <Link variant="capitalize" href={href}>
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
