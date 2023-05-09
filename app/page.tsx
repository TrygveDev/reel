import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./libs/firebase";

export default function Home() {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log("user is logged in");
		} else {
			console.log("user is not logged in");
		}
	});
	return <main>Dekan</main>;
}
