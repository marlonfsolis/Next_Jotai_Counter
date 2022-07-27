import { useEffect } from "react";

import type { AppProps } from "next/app";
import { Provider } from "jotai";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider>
            <Component {...pageProps} />
        </Provider>
    );
}
