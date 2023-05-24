"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./libs/firebase";
import Navbar from "./components/Navbar";
import Loading from "./loading";
import MovieCard from "./components/MovieCard";
import axios from "axios";

export default function Home() {
	const router = useRouter();
	const [user, setUser] = useState<User>();
	const [initializing, setInitializing] = useState(true);
	const [movies, setMovies] = useState();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				router.push("/auth");
			}
		});

		if (user) {
			axios
				.get(
					`https://api.themoviedb.org/3/movie/popular/?page=${1}&api_key=${
						process.env.NEXT_PUBLIC_TMDB_API_KEY
					}`
				)
				.then((res) => {
					console.log(res.data);
					setMovies(res.data);
					setInitializing(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [router, user]);

	return initializing ? (
		<Loading />
	) : (
		<>
			<Navbar user={user} />
			<main className="h-screen w-screen flex flex-col items-center justify-center bg-[var(--secondary)] p-7">
				<div className="flex w-[calc(90%-0.375rem)] h-[calc(155vw)]">
					<MovieCard movie={movies.results[0]} />
				</div>
			</main>
		</>
	);
}
