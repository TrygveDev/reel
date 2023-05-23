"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./libs/firebase";
import Navbar from "./components/Navbar";
import Loading from "./loading";

export default function Home() {
	const router = useRouter();
	const [user, setUser] = useState<User>();
	const [initializing, setInitializing] = useState(true);

	interface Workout {
		name: string;
		icon: string;
		exercises: {
			[key: string]: {
				name: string;
				sets: string | number;
				reps: string | number;
			};
		};
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}

			setInitializing(false);
		});
	}, []);

	return initializing ? (
		<Loading />
	) : (
		<>
			<Navbar />
			<main className="h-screen w-screen flex flex-col items-center bg-[var(--secondary)] p-7">
				Test
			</main>
		</>
	);
}
