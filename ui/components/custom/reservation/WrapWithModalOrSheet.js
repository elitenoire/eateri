import FormModal from './FormModal'
import FormBottomSheet from './FormBottomSheet'

import styles from './style'

export default function WrapWithModalOrSheet({ children, isSheet, ringed }) {
    if (isSheet) {
        return <FormBottomSheet sx={styles.scrollbar}>{children}</FormBottomSheet>
    }
    return (
        <FormModal ringed={ringed} sx={styles.scrollbar}>
            {children}
        </FormModal>
    )
}
