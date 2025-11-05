import type { AppProps } from "next/app";

import '@mui/material/styles'; // o el CSS baseline
import CssBaseline from '@mui/material/CssBaseline';
import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import theme from "@/components/theme";
import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <NextThemesProvider>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Component {...pageProps} />
        </MuiThemeProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
