import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import  TableContext  from "../utlites/tableContext";
function MyApp({ Component, pageProps }) {
  return (
    <TableContext>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </TableContext>
  );
}

export default MyApp;
