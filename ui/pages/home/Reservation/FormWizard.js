/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Reveal } from '~@/general'
import { Step, StepList, StepPanel } from '~/components/navigation/Steps'
import Form from './Form'
import StepFindTable from './StepFindTable'
import StepGuestDetails from './StepGuestDetails'
import StepConfirmation from './StepConfirmation'

import styles from './style'

function FormWizard({ isMobile, defaultValues, guestRef, dateRef, timeRef }) {
    const styleProps = !isMobile
        ? {
              className: 'card-halo',
              'data-show-halo': true,
          }
        : {}
    return (
        <div {...styleProps} sx={styles.formWrap}>
            <StepList aria-label="Reservation Step Progress">
                <Step index={0}>Find Table</Step>
                <Step index={1}>Guest Details</Step>
                <Step index={2}>Confirmation</Step>
            </StepList>
            <Form id="steppanels" defaultValues={defaultValues}>
                <StepPanel step={0}>
                    <Reveal>
                        <div>
                            <StepFindTable guestRef={guestRef} dateRef={dateRef} timeRef={timeRef} />
                        </div>
                    </Reveal>
                </StepPanel>
                <StepPanel step={1}>
                    <Reveal>
                        <div>
                            <StepGuestDetails />
                        </div>
                    </Reveal>
                </StepPanel>
                <StepPanel step={2}>
                    <Reveal>
                        <div>
                            <StepConfirmation />
                        </div>
                    </Reveal>
                </StepPanel>
            </Form>
        </div>
    )
}

export default FormWizard
