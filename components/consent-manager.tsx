import type { ReactNode } from 'react';
import {
	ConsentManagerDialog,
	ConsentManagerProvider,
	CookieBanner,
} from '@c15t/nextjs';
// For client-only apps (non-SSR), you can use:
// import { ConsentManagerProvider } from '@c15t/nextjs/client';
import { ConsentManagerClient } from './consent-manager.client';

export function ConsentManager({ children }: { children: ReactNode }) {
	return (
		<ConsentManagerProvider
			options={{
				mode: 'offline',
				consentCategories: ['necessary', 'marketing', 'experience'], // Optional: Specify which consent categories to show in the banner. 
			}}
		>
			<CookieBanner 
				theme={{
				 "banner.card": "!bg-light-green-100",
				}}
			/>
			<ConsentManagerDialog />
			<ConsentManagerClient>{children}</ConsentManagerClient>
		</ConsentManagerProvider>
	);
}
