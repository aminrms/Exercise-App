import "../styles/globals.css";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import { wrapper } from "../store/store";
import { Wait } from "../utils/Wait";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
function MyApp({ Component, pageProps, ...rest }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });
  useEffect(() => {
    async function loading() {
      await Wait(600);
      setLoading(false);

      const handleStart = async (url) => {
        if (url !== router.pathname) setLoading(true);
        await Wait(500);
        setLoading(false);
      };
      const handleComplete = async (url) => {
        await Wait(500);
        setLoading(false);
      };
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }
    loading();
  }, [router]);

  const { store } = wrapper.useWrappedStore(rest);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
