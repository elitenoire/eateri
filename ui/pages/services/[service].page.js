import { useRouter } from 'next/router'

export default function ServicePage() {
    const {
        query: { service },
        isFallback,
    } = useRouter()

    // if (isFallback) return <div>LOADING...</div>

    return <div>Service {service}</div>
}

export async function getStaticPaths() {
    return {
        paths: [
            // { params: { service : ''}},
            { params: { service: 'dine-in-buffet' } },
            { params: { service: 'takeaway' } },
            { params: { service: 'delivery' } },
            { params: { service: 'catering' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            service: params.service,
        },
    }
}
