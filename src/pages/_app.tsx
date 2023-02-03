import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import 'styles/scss/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const authPages = [
		'/',
		'/login',
		'/password_recovery',
		'/password_recovery_new_password',
		'/logout_successful',
		'/register_successful',
	];

	if (authPages.includes(router.pathname)) {
		return (
				<Component {...pageProps} />
		);
	}

	return (
			<Component {...pageProps} />
	);
}

export default MyApp;
