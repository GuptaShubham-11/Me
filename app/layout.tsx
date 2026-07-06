import type { Metadata } from "next";
import { Sora, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { CustomPostHogProvider } from "@/components/PostHogProvide";

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: "Gupta Shubham",
  description: "Ai Product Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
      lang="en"
      className={`${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CustomPostHogProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
          >
            {children}
          </ThemeProvider>
        </CustomPostHogProvider>
      </body>
    </html>
  );
}
