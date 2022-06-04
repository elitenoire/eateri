import { Reveal } from '~@core/general'
import { Step, StepList, StepPanel } from '~@core/navigation'
import StepFindTable from '../StepFindTable'
import StepGuestDetails from '../StepGuestDetails'
import StepConfirmation from '../StepConfirmation'
import { useStyle } from '../context'

import styles from './style'

function BookingForm() {
    const { styleProp } = useStyle()
    return (
        <div sx={styles.formWrap} {...styleProp}>
            <StepList aria-label="Reservation Step Progress" {...styleProp}>
                <Step index={0}>Find Table</Step>
                <Step index={1}>Guest Details</Step>
                <Step index={2}>Confirmation</Step>
            </StepList>
            <StepPanel step={0}>
                <Reveal>
                    <div>
                        <StepFindTable />
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
        </div>
    )
}

export default BookingForm
