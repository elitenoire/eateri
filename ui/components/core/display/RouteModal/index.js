import { useEffect, useCallback, memo } from 'react'
import { useRouter } from 'next/router'
import { useDialogState, Dialog, DialogBackdrop } from 'reakit/Dialog'
import { Button } from '~@core/general'

import styles from './style'

// Animation Helper
// Delay rendering until after exit animation
const shouldUpdate = (prev, next) => !(prev.animating && !next.animating)
const DelayGate = memo(function DelayGate({ children }) {
    return children
}, shouldUpdate)

export default function RouteModal({
    isOpen,
    onClose,
    closeUrl,
    closeAs,
    shallow = true,
    scroll = false,
    children,
    ...rest
}) {
    const { push, pathname = '/' } = useRouter()
    const dialog = useDialogState({ animated: true, visible: isOpen })
    const { show, hide, visible, animated, animating } = dialog

    const closeModal = useCallback(() => {
        if (!visible) return

        push(closeUrl || pathname, closeAs || closeUrl || pathname, { shallow, scroll })
        onClose?.()
        // push as hook dependency causes infinite render loop
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible, closeAs, closeUrl, hide, onClose, pathname, scroll, shallow])

    useEffect(() => {
        if (isOpen) {
            show()
        } else {
            hide()
        }
    }, [isOpen, show, hide])

    return (
        <DialogBackdrop {...dialog} hide={closeModal} sx={styles.backdrop}>
            <Dialog {...dialog} hide={closeModal} {...rest} sx={styles.modal}>
                <div className="modal-content" sx={styles.content}>
                    {(visible || (!!animated && animating)) && <DelayGate animating={animating}>{children}</DelayGate>}
                </div>
                <Button color="secondary" icon="close" sx={styles.closeButton} onClick={closeModal} />
            </Dialog>
        </DialogBackdrop>
    )
}
