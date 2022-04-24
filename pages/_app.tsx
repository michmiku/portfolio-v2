import "styles/globals.scss";
import type { AppProps } from "next/app";
import globalStateMachine from "machines/globalStateMachine";
import { GlobalStateContext } from "machines/globalStateContext";
import { useInterpret } from "@xstate/react";
import Layout from "components/layout";
function MyApp({ Component, pageProps }: AppProps) {
  const globalStateService = useInterpret(globalStateMachine);
  return (
    <GlobalStateContext.Provider value={{ globalStateService }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStateContext.Provider>
  );
}

export default MyApp;
