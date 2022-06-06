import FormModal from './FormModal'
import FormBottomSheet from './FormBottomSheet'

import { scrollbarStyle } from './style'

export default function WrapWithModalOrSheet({ children, isSheet }) {
    if (isSheet) {
        return <FormBottomSheet>{children}</FormBottomSheet>
    }
    return <FormModal sx={scrollbarStyle}>{children}</FormModal>
}
