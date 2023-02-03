import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import 'styles/scss/global.scss';
import { ThemeProvider } from '@ui5/webcomponents-react';

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

	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
