import "../styles/globals.css";
import "@fillout/react/style.css";
import "@fontsource/space-grotesk/index.css";

import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

if (typeof window !== 'undefined') { // checks that we are client-side
  posthog.init("phc_y6fWOgMgk8mhVXASbsIZAfaqJ0c4Hu0Z4JW7WY1AwbS", {
    api_host: "/ingest",
    "opt_in_site_apps": true,
    person_profiles: 'always', // always spy and send user data
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
    },
  })
}

import { JetBrains_Mono } from 'next/font/google'
import localFont from 'next/font/local'

// JetBrains Mono from Google Fonts
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})


export default function App(
    { Component, pageProps: { session, ...pageProps } }
) {
    const router = useRouter();

    useEffect(() => {
        const { f, ...otherQuery } = router.query;
        if (f) {
            const newQuery = { ...otherQuery, utm_source: f };
            router.replace(
                {
                    pathname: router.pathname,
                    query: newQuery,
                },
                undefined,
                { shallow: true }
            );
        }
    }, [router.query]);

    return (
        <>
            <PostHogProvider client={posthog}>
                <Component {...pageProps} />
            </PostHogProvider>
        </>
    )
}
