import React from "react";

const Loading = () => {
	return (
		<div className=" min-h-screen flex items-center justify-center flex-col">
			<div className=" my-2">loading...</div>
			<div className="relative">
				<div className="progress-loader">
					<div className="progress"></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
