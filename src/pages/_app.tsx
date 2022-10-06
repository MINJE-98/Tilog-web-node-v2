import "../../styles/tailwind.css";
import "../../styles/globals.css";
import "../../styles/nprogress.css";

import { AppProps } from "next/app";
import { useState } from "react";

import { Toaster } from "react-hot-toast";
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import { AuthProvider } from "@Contexts/auth/AuthProvider";
import useProgressBar from "@Hooks/useProgressBar";
import Footer from "@Models/footer";
import Header from "@Models/header";

// const queryClient = new QueryClient({});

type CustomAppProps = AppProps & {
  pageProps: {
    dehydratedState: DehydratedState;
  };
};

const App = ({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: CustomAppProps) => {
  useProgressBar();
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <AuthProvider>
          <Toaster />
          {Component.name !== "Callback" && <Header />}
          <Component {...pageProps} />
          <Footer />
        </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};
export default App;
