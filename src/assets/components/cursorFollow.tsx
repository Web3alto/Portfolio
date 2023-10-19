import React, { useEffect, useState } from "react";
import { motion, useAnimation, Transition } from "framer-motion"; 
import "../style/App.css";

interface CursorPosition {
	x: number;
	y: number;
}

const CursorFollower: React.FC = () => {
	const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
		x: -20,
		y: -20,
	});

	const controls = useAnimation();

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setCursorPosition({
				x: e.clientX - 20,
				y: e.clientY - 20,
			});
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		controls.start({ x: cursorPosition.x, y: cursorPosition.y });
	}, [cursorPosition, controls]);

	const springTransition: Transition = {
		type: "spring",
		stiffness: 165,
		damping: 20,
		ease: "ease-in-out",
	};

	return (
		<motion.div
			className="cursor-follower"
			style={{
				x: cursorPosition.x,
				y: cursorPosition.y,
			}}
			animate={controls}
			initial={{ opacity: 1 }}
			transition={springTransition}
		></motion.div>
	);
};

export default CursorFollower;
