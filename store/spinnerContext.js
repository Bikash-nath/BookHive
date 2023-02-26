import { createContext, useState } from 'react'

const SpinnerContext = createContext({
	activeSpinner: false,
	toggleSpinner: function (spinnerStatus) {},
})

export function SpinnerContextProvider(props) {
	const [spinnerState, setSpinnerState] = useState(false)

	function toggleSpinnerHandler(spinnerStatus) {
		console.log('toggleSpinnerHandler', spinnerStatus)
		setSpinnerState(spinnerStatus)
	}

	const context = {
		activeSpinner: spinnerState,
		toggleSpinner: toggleSpinnerHandler,
	}

	return <SpinnerContext.Provider value={context}>{props.children}</SpinnerContext.Provider>
}

export default SpinnerContext
