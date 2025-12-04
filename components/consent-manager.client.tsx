'use client';

import type { ReactNode } from 'react';
import { ClientSideOptionsProvider } from '@c15t/nextjs/client';

export function ConsentManagerClient({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ClientSideOptionsProvider
			// 📝 Add your integration scripts here
			// Scripts are loaded when consent is given and removed when consent is revoked
			scripts={[
				// Example:
				// googleTagManager({
				//   id: 'GTM-XXXXXX',
				//   script: {
				//     onLoad: () => console.log('GTM loaded'),
				//   },
				// }),
			]}
			// 📝 Add your callbacks here
			// Callbacks allow you to react to consent events
			callbacks={{
				// Example:
				// onConsentSet(response) {
				//   console.log('Consent updated:', response);
				// },
				// onError(error) {
				//   console.error('Consent error:', error);
				// },
			}}
		>
			{children}
		</ClientSideOptionsProvider>
	);
}
