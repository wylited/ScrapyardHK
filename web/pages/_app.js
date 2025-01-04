import "../styles/globals.css";
import "@fillout/react/style.css";

import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') { // checks that we are client-side
  posthog.init("phc_y6fWOgMgk8mhVXASbsIZAfaqJ0c4Hu0Z4JW7WY1AwbS", {
    api_host: "/ingest",
    person_profiles: 'always', // always spy and send user data
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
    },
  })
}

export default function App(
    { Component, pageProps: { session, ...pageProps } }
) {
    return (
        <>
            <PostHogProvider client={posthog}>
                <Component {...pageProps} />
            </PostHogProvider>
        </>
    )
}