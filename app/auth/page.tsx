"use client";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../libs/firebase";
import Loading from "../loading";
import Login from "./login/page";
import Link from "next/link";

export default function Auth() {
	const router = useRouter();
	const [user, setUser] = useState<User>();
	const [loading, setLoading] = useState<boolean>();
	const [initializing, setInitializing] = useState<boolean>(true);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				router.push("/");
			} else {
				setUser(null);
			}
			setInitializing(false);
		});
	}, [router]);

	return initializing ? (
		<Loading />
	) : (
		<main className="h-screen w-screen flex flex-col items-center justify-evenly bg-[var(--secondary)] p-7">
			<div className="w-full text-center">
				<h1 className="text-5xl">REEL</h1>
				<p>Discover. Watch. Repeat.</p>
			</div>
			<div className="w-full flex flex-col gap-4">
				<Link href="/auth/login">
					<button
						className="bg-[var(--primary-button)] h-16 text-lg w-full flex items-center justify-center rounded"
						disabled={loading}
					>
						Login
					</button>
				</Link>
				<Link href="/auth/signup">
					<button
						className="bg-[var(--secondary-button)] h-16 text-lg w-full flex items-center justify-center rounded"
						disabled={loading}
					>
						Signup
					</button>
				</Link>
			</div>
		</main>
	);
}
