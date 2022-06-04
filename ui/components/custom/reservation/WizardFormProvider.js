import { useForm, FormProvider } from 'react-hook-form'
import { StepProvider } from '~@core/navigation'
import { StyleProvider, FormRefsProvider } from './context'

export default function WizardFormProvider({ step, styled, ringed, defaultValues = {}, children }) {
    const methods = useForm({
        mode: 'onSubmit',
        submitFocusError: false,
        shouldUnregister: false,
        defaultValues,
    })

    return (
        <StyleProvider styled={styled} ringed={ringed}>
            <FormRefsProvider>
                <StepProvider step={step}>
                    <FormProvider {...methods}>{children}</FormProvider>
                </StepProvider>
            </FormRefsProvider>
        </StyleProvider>
    )
}
