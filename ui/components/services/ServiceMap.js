import Dining from '~@/services/Dining'
import Catering from '~@/services/Catering'
import Delivery from '~@/services/Delivery'
import Takeaway from '~@/services/Takeaway'

const map = {
    dining: Dining,
    catering: Catering,
    delivery: Delivery,
    takeaway: Takeaway,
}

function ServiceMap({ service, ...props }) {
    const Service = map[service]
    return <Service hideBackLink {...props} />
}

export default ServiceMap
