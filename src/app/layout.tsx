import "@/styles/globals.css";

import { Raleway } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "cxmin.digital - get rid of the usual",
  description:
    "Embark on a journey through my portfolio as a full-stack developer from Romania, where simplicity and functionality converge. My approach ensures you enjoy a seamless, responsive, and engaging user experience, tailored for every device. Dive into my world of user-centric design, crafted to meet the evolving needs of the digital landscape.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${raleway.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
