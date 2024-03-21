import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  );
}
export default MyApp;
