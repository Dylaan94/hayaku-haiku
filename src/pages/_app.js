import "@/styles/globals.scss";

// fonts
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main class={openSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
