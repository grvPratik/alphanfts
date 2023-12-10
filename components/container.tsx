import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-10">{children}</div>;
};

export default Container;
