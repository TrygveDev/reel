import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, CircularProgress, Rating } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

type Props = {
	movie: any;
};

const MovieCard = (props: Props) => {
	const [clicked, setClicked] = useState<boolean>(false);
	const [movie, setMovie] = useState();
	console.log(props.movie.id);

	useEffect(() => {
		console.log("predekan");
		if (!props.movie) return;
		console.log("dekan");
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${props.movie.id}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
			)
			.then((res) => {
				console.log(res.data);
				setMovie(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [props.movie]);

	return movie ? (
		<div
			className={`w-full h-full bg-[var(--secondary-button)] rounded-xl overflow-hidden ${
				clicked &&
				`bg-black bg-opacity-90 bg-[url(https://image.tmdb.org/t/p/w500/${props.movie.poster_path})] bg-cover bg-center bg-blend-multiply overflow-hidden`
			}`}
			onClick={() => setClicked((value) => !value)}
		>
			{clicked ? (
				<>
					<div className="w-full h-full p-4 flex flex-col justify-evenly">
						<div>
							<p className="w-full max-h-16 font-bold text-2xl">
								Avatar: The Way of Water
							</p>
							<p className="h-5 font-light">
								PG-13 • 2022 • 3h 12m
							</p>
							<p className="h-5 font-light">
								Science Fiction, Adventure
							</p>
						</div>

						<div>
							<p className="h-5">Rating</p>
							<Rating
								value={2.5}
								precision={0.5}
								max={5}
								icon={<FontAwesomeIcon icon={faStar} />}
								emptyIcon={<FontAwesomeIcon icon={faStar} />}
								readOnly
							/>
						</div>

						<div>
							<p className="h-5">Overview</p>
							<p className="font-light text-sm h-52 max-h-52 ">
								Set more than a decade after the events of the
								first film, learn the story of the Sully family
								(Jake, Neytiri, and their kids), the trouble
								that follows them, the lengths they go to keep
								each other safe, the battles they fight to stay
								alive, and the tragedies they endure.
							</p>
						</div>

						<div>
							<p>Available on</p>
							<div className="w-full flex flex-row items-center gap-2 overflow-x-scroll">
								<Avatar src="https://logowik.com/content/uploads/images/netflix-n.jpg" />
								<Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
								<Avatar src="https://d23.com/app/uploads/2022/08/1180w-600h_Disney_Plus_Logo.jpg" />
								<Avatar src="https://www.altibox.no/wp-content/uploads/2021/10/delingsbilde-hboMax-624x624.png" />
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<Image
						className="w-full rounded-top-xl"
						width={500}
						height={500}
						src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
						alt=""
					/>
					<div className="w-full h-full pl-4 pr-4 pb-4 pt-1">
						<p className="w-full max-h-16 font-bold text-xl overflow-y-scroll">
							{props.movie.title}
						</p>
						<p className="text-gray-700 h-8">
							{props.movie.release_date.split("-")[0]}, 3h 12m
						</p>
						<div className="w-full flex flex-row items-center gap-2 overflow-x-scroll">
							<Avatar src="https://logowik.com/content/uploads/images/netflix-n.jpg" />
							<Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" />
							<Avatar src="https://d23.com/app/uploads/2022/08/1180w-600h_Disney_Plus_Logo.jpg" />
							<Avatar src="https://www.altibox.no/wp-content/uploads/2021/10/delingsbilde-hboMax-624x624.png" />
						</div>
					</div>
				</>
			)}
		</div>
	) : (
		<div className="w-full h-full bg-[var(--secondary-button)] rounded-xl overflow-hidden flex items-center justify-center">
			<CircularProgress />
		</div>
	);
};

export default MovieCard;
