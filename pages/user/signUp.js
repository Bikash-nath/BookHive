import Head from 'next/head'
import { Fragment } from 'react'

function SignUpPage(props) {
	const router = useRouter()
	return (
		<Fragment>
			<Head>
				<title>SignUp</title>
				<meta name='description' content='SignUp section' />
			</Head>
		</Fragment>
	)
}

export default SignUpPage
