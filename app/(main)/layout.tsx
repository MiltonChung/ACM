import "@/styles/global.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UCSC ACM",
  description:
    "We are a student run organization that strives to create a supportive and inclusive community for people of all backgrounds and skill levels who are passionate about computer science to learn and network.",
  keywords: [
    "UCSC",
    "ACM",
    "Association for Computing Machinery",
    "CS",
    "Computer Science",
    "UC Santa Cruz",
    "Engineering",
  ],
  alternates: {
    canonical: "https://ucscacm.vercel.app",
  },
  themeColor: "#0093d0",
  authors: [
    {
      name: "Milton Chung",
      url: "miltonchung.com",
    },
  ],
  openGraph: {
    title: "UCSC ACM",
    description:
      "We are a student run organization that strives to create a supportive and inclusive community for people of all backgrounds and skill levels who are passionate about computer science to learn and network.",
    url: "https://ucscacm.vercel.app",
    siteName: "UCSC ACM",
    images: [
      {
        url: "/og_preview.png",
        width: 1175,
        height: 662,
        alt: "UCSC ACM homepage preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
