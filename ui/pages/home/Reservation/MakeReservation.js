import { Container } from '@theme-ui/components'
import { FormDialogProvider } from './useFormDialogState'

import FormWizard from './FormWizard'
import FormWizardDialog from './FormWizardDialog'

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
            <FormWizardDialog defaultValues={defaultValues} />
        </FormDialogProvider>
    )
}

export default MakeReservation
