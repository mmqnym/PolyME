import { Alert } from "flowbite-react";
import { useState } from "react";

export function Component() {
	const [showHint, setShowHint] = useState(true);

	function closeHint() {
		setShowHint(false);
	}

	return (
		<Alert
			color="success"
			className={`${showHint ? "xl:hidden fixed w-full z-10 top-[4rem] left-1/2 -translate-x-[50%]" : "hidden z-[-1]"}`}
			onDismiss={closeHint}
		>
			<span className="font-medium">
				For the best experience, read this page on a computer.
			</span>
		</Alert>
	);
}

export default Component;
