import { addDecorator, addParameters, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withViewport } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'

// Options
addParameters({
	options: {
		name: 'Citrus UI',
		theme: themes.light,
	},
})
const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
	req.keys().forEach(filename => req(filename))
}

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>)
addDecorator(withViewport())
addDecorator(withKnobs)

configure(loadStories, module)
