import WizardFormProvider from './WizardFormProvider'
import WrapWithModalOrSheet from './WrapWithModalOrSheet'
import FormHandler from './FormHandler'
import BookingForm from './BookingForm'

export default function Widget({ isSheet, styled, ringed, ...rest }) {
    return (
        <WizardFormProvider styled={styled || isSheet} ringed={ringed} {...rest}>
            <WrapWithModalOrSheet isSheet={isSheet}>
                <FormHandler>
                    <BookingForm />
                </FormHandler>
            </WrapWithModalOrSheet>
        </WizardFormProvider>
    )
}
