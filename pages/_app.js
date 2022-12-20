import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import TableContext from "../utlites/tableContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TableContext>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </TableContext>
    </QueryClientProvider>
  );
}

export default MyApp;
