import Link from "next/link";
import React from "react";
import ToggleTheme from "../ui/Toggletheme";

const Footer = () => {
	return (
		
			<footer className="bg-background">
				<div className="relative mx-4 sm:mx-6 md:mx-8 lg:mx-10 px-4 pt-16 pb-6 lg:pt-24">
					<ToggleTheme/>

					<div className="lg:flex lg:items-end lg:justify-between">
						<div>
							<div className="flex justify-center text-teal-600 lg:justify-start font-bold text-lg">
								Zenl
							</div>

							<p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Incidunt consequuntur amet culpa cum itaque neque.
							</p>
						</div>

						<ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
							<li>
								<a
									className="text-gray-700 transition hover:text-gray-300/75"
									href="/"
								>
									{" "}
									About{" "}
								</a>
							</li>

							<li>
								<a
									className="text-gray-700 transition hover:text-gray-300/75"
									href="/"
								>
									{" "}
									Contact{" "}
								</a>
							</li>

							<li>
								<a
									className="text-gray-700 transition hover:text-gray-300/75"
									href="/"
								>
									{" "}
								Resources{" "}
								</a>
							</li>

							<li>
								<a
									className="text-gray-700 transition hover:text-gray-300/75"
									href="/"
								>
									{" "}
									Blog{" "}
								</a>
							</li>
						</ul>
					</div>

					<p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
						Copyright &copy; 2024. All rights reserved.
					</p>
				</div>
			</footer>
		
	);
};

export default Footer;
