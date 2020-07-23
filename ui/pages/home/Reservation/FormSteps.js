/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { useCallback } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import { useStepContext } from '~@/navigation'
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

const FormSteps = ({ children, ...rest }) => {
    const { handleSubmit, ...methods } = useForm({
        mode: 'onSubmit',
        submitFocusError: false,
        shouldUnregister: false,
    })

    const { isSubmitting } = methods.formState

    const { isFirst, isLast, prevStep, nextStep } = useStepContext()

    const _onSubmit = data => console.log(data)

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

    const goBack = () => {
        methods.reset(methods.getValues())
        prevStep()
    }

    const { ariaLabel, title, submitText } = getSubmitButtonProps(isFirst, isLast, isSubmitting)

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} {...rest}>
                {children}
                <div sx={styles.action}>
                    {!isFirst && (
                        <Button
                            color="secondary"
                            type="button"
                            onClick={!isSubmitting ? goBack : undefined}
                            disabled={isSubmitting}
                            title="Previous Step"
                        >
                            Back
                        </Button>
                    )}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        title={title}
                        aria-label={ariaLabel}
                    >
                        {submitText}
                    </Button>
                </div>
            </form>
            <DevTool control={methods.control} />
        </FormProvider>
    )
}

export default FormSteps
