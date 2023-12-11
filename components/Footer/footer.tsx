
import React from "react";
import ToggleTheme from "../ui/Toggletheme";
import Logo from "@/components/Icon/logo"

const Footer = () => {
	return (
		<footer className="bg-background">
			<div className="relative mx-4 sm:mx-6 md:mx-8 lg:mx-10 px-4 pt-16 pb-2 lg:pt-24">
				

				<div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
					<div className="sm:col-span-2">
						<span
							aria-label="Go home"
							title="Company"
							className="inline-flex items-center"
						>
							<Logo />
							<span className="ml-2 text-xl font-bold tracking-wide  uppercase">
								ALPHA NFTS
							</span>
						</span>
						<div className="mt-6 lg:max-w-sm">
							<p className="text-sm dark:text-violet-200/75 opacity-70">
								Discover upcoming, popular, and daily minted NFTs all in one
								place! Explore the newest drops, trending collections, and fresh
								creations daily on our platform.
							</p>
							<p className="mt-4 text-sm dark:text-violet-200/75 opacity-70">
								Happy Minting 🚀
							</p>
						</div>
					</div>
					 <div className="space-y-2 text-sm"><ToggleTheme />
					
						
						
						{/*	<p className="text-base font-bold tracking-wide text-gray-900">
							Contacts
						</p>
						<div className="flex">
							<p className="mr-1 text-violet-500/75 opacity-70">Phone:</p>
							<a
								href="tel:850-123-5021"
								aria-label="Our phone"
								title="Our phone"
								className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								850-123-5021
							</a>
						</div>
						<div className="flex">
							<p className="mr-1 text-violet-500/75 opacity-70">Email:</p>
							<a
								href="mailto:info@lorem.mail"
								aria-label="Our email"
								title="Our email"
								className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								info@lorem.mail
							</a>
						</div>
						<div className="flex">
							<p className="mr-1 text-violet-500/75 opacity-70">Address:</p>
							<a
								href="https://www.google.com/maps"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Our address"
								title="Our address"
								className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
							>
								312 Lovely Street, NY
							</a>
						</div>*/}



					</div> 
					<div>
						<span className="text-base font-bold tracking-wide text-gray-900">
							Social
						</span>
						<div className="flex items-center mt-1 space-x-3">
							<a
								href="https://twitter.com/thealphanfts"
								target="_blank"
								className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400  rounded-full p-1 hover:bg-gray-300"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 512 512"
								>
									<g clipPath="url(#clip0_84_15698)">
										<rect
											width="512"
											height="512"
											fill="transparent"
											rx="60"
										></rect>
										<path
											fill="currentColor"
											d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
										></path>
									</g>
									<defs>
										<clipPath id="clip0_84_15698">
											<rect width="512" height="512" fill="transparent"></rect>
										</clipPath>
									</defs>
								</svg>
							</a>
							<a
								href="/"
								target="_blank"
								className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400  rounded-full p-1 hover:bg-gray-300"
							>
								<svg
									className="h-6 w-6"
									viewBox="0 0 512 512"
									fill="transparent"
									role="img"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									stroke="transparent"
								>
									<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										strokeLinecap="round"
										strokeLinejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<rect
											width="512"
											height="512"
											rx="15%"
											fill="transparent"
										></rect>{" "}
										<path
											d="m386 137c-24-11-49.5-19-76.3-23.7c-.5 0-1 0-1.2.6c-3.3 5.9-7 13.5-9.5 19.5c-29-4.3-57.5-4.3-85.7 0c-2.6-6.2-6.3-13.7-10-19.5c-.3-.4-.7-.7-1.2-.6c-23 4.6-52.4 13-76 23.7c-.2 0-.4.2-.5.4c-49 73-62 143-55 213c0 .3.2.7.5 1c32 23.6 63 38 93.6 47.3c.5 0 1 0 1.3-.4c7.2-9.8 13.6-20.2 19.2-31.2c.3-.6 0-1.4-.7-1.6c-10-4-20-8.6-29.3-14c-.7-.4-.8-1.5 0-2c2-1.5 4-3 5.8-4.5c.3-.3.8-.3 1.2-.2c61.4 28 128 28 188 0c.4-.2.9-.1 1.2.1c1.9 1.6 3.8 3.1 5.8 4.6c.7.5.6 1.6 0 2c-9.3 5.5-19 10-29.3 14c-.7.3-1 1-.6 1.7c5.6 11 12.1 21.3 19 31c.3.4.8.6 1.3.4c30.6-9.5 61.7-23.8 93.8-47.3c.3-.2.5-.5.5-1c7.8-80.9-13.1-151-55.4-213c0-.2-.3-.4-.5-.4Zm-192 171c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38zm125 0c-19 0-34-17-34-38c0-21 15-38 34-38c19 0 34 17 34 38c0 21-15 38-34 38z"
											fill="currentColor"
										></path>{" "}
									</g>
								</svg>
							</a>
							<a
								href="/"
								className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
								<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
									<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
								</svg>
							</a>
						</div>
						<p className="mt-4 text-sm text-gray-500">
							Follow our social to get updated on latest events. 💖🫱🏾‍🫲🏽
						</p>
					</div>
				</div>
				<div className="flex flex-col-reverse justify-between pt-5 pb-4  lg:flex-row">
					<p className="text-sm text-gray-600">
						© Copyright 2024 alphanfts. All rights reserved.
					</p>
					<ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
						<li>
							<a
								href="/"
								className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
								F.A.Q
							</a>
						</li>
						<li>
							<a
								href="/"
								className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="/"
								className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
							>
								Terms &amp; Conditions
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
