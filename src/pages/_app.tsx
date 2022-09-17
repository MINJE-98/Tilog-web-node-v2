import "../../styles/globals.css";
import "../../styles/nprogress.css";

import { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "@Commons/organisms/header";
import Footer from "@Components/footer";
import { AuthProvider } from "@Contexts/auth/AuthProvider";
import useProgressBar from "@Hooks/useProgressBar";

import GetMeResponse from "@Api/users/interface/getMeResponse";

const queryClient = new QueryClient({});

type CustomAppProps = AppProps & {
  pageProps: {
    initUserInfo: GetMeResponse;
  };
};

const App = ({
  Component,
  pageProps: { initUserInfo, ...pageProps },
}: CustomAppProps) => {
  useProgressBar();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider initUserInfo={initUserInfo}>
        <Toaster />
        {Component.name !== "Callback" && <Header />}
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </QueryClientProvider>
  );
};
export default App;
