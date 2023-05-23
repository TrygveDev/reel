import "./globals.css";
import { Lexend } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const font = Lexend({
	subsets: ["latin"],
});

export const metadata = {
	title: "Reel",
	description: "Discover. Watch. Repeat.",
	manifest: "/manifest.json",
	applicationName: "Reel",
	icons: {
		icon: "/favicon.png",
		apple: "/apple-touch-icon.png",
	},
	appleWebApp: {
		title: "Reel",
		capable: true,
		statusBarStyle: "default",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={font.className}>
				{children}
				<ToasterProvider />
			</body>
		</html>
	);
}
