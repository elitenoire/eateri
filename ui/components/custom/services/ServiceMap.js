import Dining from './Dining'
import Catering from './Catering'
import Delivery from './Delivery'
import Takeaway from './Takeaway'

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
