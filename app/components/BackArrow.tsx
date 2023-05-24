import { useRouter } from "next/navigation";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
	confirm?: boolean;
	confirmPrompt?: string;
	confirmSubPropmt?: string;
	path?: string;
};

const BackArrow: React.FC<Props> = ({ path }) => {
	const route = useRouter();

	return (
		<div className="w-screen h-screen absolute p-7 pointer-events-none">
			<FontAwesomeIcon
				icon={faAngleLeft}
				size="xl"
				className="pointer-events-auto"
				onClick={() => (path ? route.push(path) : route.back())}
			/>
		</div>
	);
};

export default BackArrow;
