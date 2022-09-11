import "../../styles/globals.css";
import "../../styles/nprogress.css";

import { AppProps } from "next/app";

import { DefaultSeo } from "next-seo";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "@Contexts/auth/AuthProvider";
import useProgressBar from "@Hooks/useProgressBar";
import { rootSeo } from "@Library/seo";

const queryClient = new QueryClient({});

const App = ({
  Component,
  pageProps: { initUserInfo, ...pageProps },
}: AppProps) => {
  useProgressBar();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initUserInfo={initUserInfo}>
        <Toaster />
        <DefaultSeo {...rootSeo} />
        <Component {...pageProps} />
      </AuthProvider>
    </QueryClientProvider>
  );
};
export default App;
