import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store, persistor } from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Auth from "./Auth";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor} >
            <Auth>
              <Component {...pageProps} />
            </Auth>
          </PersistGate>
        </Provider>
      </>
  )
}
