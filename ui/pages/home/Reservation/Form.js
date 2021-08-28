/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
// import { DevTool } from '@hookform/devtools'

import { useStepControl, useStepStatus } from '~@/navigation'
import Button from '~@/general/Button'

import styles from './style'

const sleep = time => new Promise(acc => setTimeout(acc, time))

const getSubmitButtonProps = (isFirst, isLast, isSubmitting) => {
    let submitText = 'Next'
    let ariaLabel = null
    let title = 'Next Step'

    if (isLast) {
        submitText = 'Confirm'
        ariaLabel = isSubmitting ? 'Confirming reservation' : ariaLabel
        title = isSubmitting ? 'Confirming...' : 'Confirm Reservation'
    }
    if (isFirst) {
        submitText = 'Find Table'
        ariaLabel = isSubmitting ? 'Checking table availability' : ariaLabel
        title = isSubmitting ? 'Finding Table...' : 'Check Table Availability'
    }
    return {
        submitText,
        ariaLabel,
        title,
    }
}

function FormSteps({ children, defaultValues = {}, ...rest }) {
    const { handleSubmit, ...methods } = useForm({
        mode: 'onSubmit',
        submitFocusError: false,
        shouldUnregister: false,
        defaultValues,
    })

    const {
        formState: { isSubmitting },
        reset,
        getValues,
    } = methods

    const { prevStep, nextStep } = useStepControl()
    const { isFirst, isLast } = useStepStatus()
    // const _onSubmit = data => console.log(data)
    const onSubmit = async data => {
        if (isLast) {
            console.log(data)
            return
        }
        if (isFirst) {
            await sleep(3000)
            console.log(data)
        }
        nextStep()
    }

    const goBack = useCallback(() => {
        if (isSubmitting) return

        reset(getValues())
        prevStep()
    }, [isSubmitting, prevStep, reset, getValues])

    const { ariaLabel, title, submitText } = getSubmitButtonProps(isFirst, isLast, isSubmitting)

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} {...rest}>
                {children}
                <div sx={styles.action}>
                    {!isFirst && (
                        <Button
                            mr={3}
                            color="secondary"
                            type="button"
                            size="lg"
                            onClick={goBack}
                            disabled={isSubmitting}
                            title="Previous Step"
                            noFade
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        title={title}
                        aria-label={ariaLabel}
                        noFade
                    >
                        {submitText}
                    </Button>
                </div>
            </form>
            {/* <DevTool control={methods.control} /> */}
        </FormProvider>
    )
}

export default FormSteps
