/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Container } from '@theme-ui/components'
import { FormDialogProvider } from './useFormDialogState'

import FormWizard from './FormWizard'
import FormDialog from './FormDialog'

const defaultValues = {
    date: null,
    time: '',
    guest: '',
}

function MakeReservation({ isMobile }) {
    if (isMobile) {
        return (
            <Container>
                <FormWizard defaultValues={defaultValues} isMobile />
            </Container>
        )
    }
    return (
        <FormDialogProvider {...defaultValues}>
            <FormDialog defaultValues={defaultValues} />
        </FormDialogProvider>
    )
}

export default MakeReservation
