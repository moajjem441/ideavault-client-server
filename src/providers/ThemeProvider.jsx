"use client";
import { ThemeProvider } from "next-themes";

const ThemeProvider = ({children}) => {
    return (
         <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
    );
};

export default ThemeProvider;