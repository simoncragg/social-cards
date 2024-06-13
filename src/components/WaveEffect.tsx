
import React from "react";

const WaveEffect: React.FC = () => {
	return (
		<div className="absolute bottom-0 left:0 w-full h-5 flex justify-between">
			<div className="absolute left-0 top-0 w-1/2 h-full bg-wave animate-wave-left"></div>
			<div className="absolute right-0 top-0 w-1/2 h-full bg-wave animate-wave-right"></div>
		</div>
	);
};

export default WaveEffect;
