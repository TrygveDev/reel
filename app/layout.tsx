import "./globals.css";
import { Lexend } from "next/font/google";

const font = Lexend({
	subsets: ["latin"],
});

export const metadata = {
	title: "Reel",
	description: "Reel",
	manifest: "/manifest.json",
	applicationName: "reel",
	icons: {
		icon: "/512.jpg",
		apple: "/icons/512.jpg",
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
			<body className={font.className}>{children}</body>
		</html>
	);
}
