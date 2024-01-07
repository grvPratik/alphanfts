import getCollection from "@/actions/getCollection";
import MintTabSeperateContainer from "@/components/Landing/MintTabSection/mint-tab-seperate";
import MintInfoSection from "@/components/mint-info-section";
import Image from "next/image";
import React from "react";
import TrendingSection from "../_component/trending-section";
import Container from "@/components/container";
import EarlySection from "../_component/early-section";
import Nav from "@/components/Header/nav";
import NavMobile from "@/components/Header/nav-mobile";
import Footer from "@/components/Footer/footer";

const MainPage = async () => {
	return (
		<>
			<Nav />
			<NavMobile />
			<Container>
				<main className="flex flex-col">
					<div className="grid grid-col-4 lg:grid-cols-6  w-full">
						<div className=" col-span-4 flex flex-col">
							<div className="p-2 flex items-center   lg:textLg dark:text-gray-100 font-medium leading-6 ">
								<div className="h-full flex items-center border-b-2 border-transparent pr-2 border-purple-500 p-1">
									{" "}
									<span>
										<svg
											className="h-8 w-8 p-1 opacity-70"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												{" "}
												<path
													d="M6.5 13L7.28446 14.5689C7.54995 15.0999 7.68269 15.3654 7.86003 15.5954C8.01739 15.7996 8.20041 15.9826 8.40455 16.14C8.63462 16.3173 8.9001 16.4501 9.43108 16.7155L11 17.5L9.43108 18.2845C8.9001 18.5499 8.63462 18.6827 8.40455 18.86C8.20041 19.0174 8.01739 19.2004 7.86003 19.4046C7.68269 19.6346 7.54995 19.9001 7.28446 20.4311L6.5 22L5.71554 20.4311C5.45005 19.9001 5.31731 19.6346 5.13997 19.4046C4.98261 19.2004 4.79959 19.0174 4.59545 18.86C4.36538 18.6827 4.0999 18.5499 3.56892 18.2845L2 17.5L3.56892 16.7155C4.0999 16.4501 4.36538 16.3173 4.59545 16.14C4.79959 15.9826 4.98261 15.7996 5.13997 15.5954C5.31731 15.3654 5.45005 15.0999 5.71554 14.5689L6.5 13Z"
													stroke="currentColor"
													strokeWidth="1.464"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>{" "}
												<path
													d="M15 2L16.1786 5.06442C16.4606 5.79765 16.6016 6.16426 16.8209 6.47264C17.0153 6.74595 17.254 6.98475 17.5274 7.17909C17.8357 7.39836 18.2024 7.53937 18.9356 7.82138L22 9L18.9356 10.1786C18.2024 10.4606 17.8357 10.6016 17.5274 10.8209C17.254 11.0153 17.0153 11.254 16.8209 11.5274C16.6016 11.8357 16.4606 12.2024 16.1786 12.9356L15 16L13.8214 12.9356C13.5394 12.2024 13.3984 11.8357 13.1791 11.5274C12.9847 11.254 12.746 11.0153 12.4726 10.8209C12.1643 10.6016 11.7976 10.4606 11.0644 10.1786L8 9L11.0644 7.82138C11.7976 7.53937 12.1643 7.39836 12.4726 7.17909C12.746 6.98475 12.9847 6.74595 13.1791 6.47264C13.3984 6.16426 13.5394 5.79765 13.8214 5.06442L15 2Z"
													stroke="currentColor"
													strokeWidth="1.464"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>{" "}
											</g>
										</svg>
									</span>{" "}
									<span className="pl-1 font-bold"> Featured project</span>
								</div>
							</div>
							<div className="relative  lg:max-h-[34rem]  m-2 aspect-[4/3]">
								<Image
									fill
									className=" rounded-xl overflow-hidden"
									src={
										"https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
									}
									alt=""
								/>
							</div>
						</div>
						<div className="lg:col-span-2  col-span-4 flex flex-col w-full gap-2">
							<div className="p-2 flex items-center  lg:textLg dark:text-gray-100 font-medium leading-6 ">
								<div className="h-full flex items-center border-b-2 border-transparent pr-2 border-purple-500 p-1">
									{" "}
									<span>
										<svg
											fill="currentColor"
											className="h-8 w-8 p-1 opacity-70"
											viewBox="0 0 32 32"
											xmlns="http://www.w3.org/2000/svg"
											stroke="currentColor"
											strokeWidth="0.00032"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												{" "}
												<title></title>{" "}
												<g data-name="Layer 97" id="Layer_97">
													{" "}
													<path d="M16,30A10,10,0,0,1,6,20C6,17,7.93,5.33,8,4.84a1,1,0,0,1,1.92-.21l2.85,7.13,2.25-9a1,1,0,0,1,1.94,0l2.25,9,2.85-7.13A1,1,0,0,1,24,4.84C24.07,5.33,26,17,26,20A10,10,0,0,1,16,30ZM9.42,8.73C8.83,12.49,8,18.13,8,20a8,8,0,0,0,16,0c0-1.87-.83-7.51-1.42-11.27l-2.65,6.64a1,1,0,0,1-1,.63,1,1,0,0,1-.9-.76L16,7.12l-2,8.12a1,1,0,0,1-.9.76,1,1,0,0,1-1-.63Z"></path>{" "}
													<path d="M20.94,21.35a1,1,0,0,0-1.48-.75A2.9,2.9,0,0,1,18,21a3,3,0,0,1-3-2.61,1,1,0,0,0-.54-.76,1,1,0,0,0-.94,0A5,5,0,1,0,21,22,4.46,4.46,0,0,0,20.94,21.35Z"></path>{" "}
													<path d="M24.51,22.91,24,19.23c0,2.25-4.15,6.12-8,6.12s-8.35-5.22-7.91-6.9L7,19.21c0,.3,0,.57,0,.79a9,9,0,0,0,17.51,2.91Z"></path>{" "}
												</g>{" "}
											</g>
										</svg>
									</span>{" "}
									<span className="pl-1 font-semibold ">Top posts</span>
								</div>{" "}
							</div>
							<div className="flex-col flex gap-1 w-full">
								<div className="post flex overflow-hidden  gap-2 m-1">
									<div className="relative  h-14 w-14 rounded-md overflow-hidden flex-shrink-0 mx-2 mt-2">
										<Image
											fill
											className=" object-cover"
											alt=""
											src={
												"https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
											}
										/>
									</div>
									<div className="flex flex-col  gap-1 my-1 ">
										<span className="text-sm md:text-base dark:text-gray-300 lg: line-clamp-2 lg:line-clamp-1 leading-4  ">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Quo lore lore
										</span>
										<span className=" dark:text-white/50 text-sm leading-4 line-clamp-1  ">
											Lorem ipsum dolor sit ametnem alias asperiores quis, et
											aut voluptatum delectus sed sapiente excepturi incidunt ad
											nobis, iure quia consequatur.
										</span>
										<span className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4 opacity-50"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
												/>
											</svg>
											<p className=" dark:text-white/50 text-xs">5 min ago</p>
										</span>
									</div>
								</div>




								{/* <div className="post grid grid-cols-6 overflow-hidden h-24 lg:h-28  gap-2 m-1">
									<div className="relative col-span-2  m-1 rounded-md overflow-hidden">
										<Image
											fill
											alt=""
											src={
												"https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
											}
										/>
									</div>
									<div className="flex flex-col col-span-4 gap-1 my-1 ">
										<span className="text-sm md:text-base dark:text-gray-300 lg: line-clamp-2 leading-4  ">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Quo lore lore
										</span>
										<span className=" dark:text-white/50 text-sm leading-4 line-clamp-1  ">
											Lorem ipsum dolor sit ametnem alias asperiores quis, et
											aut voluptatum delectus sed sapiente excepturi incidunt ad
											nobis, iure quia consequatur.
										</span>
										<span className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4 opacity-50"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
												/>
											</svg>
											<p className=" dark:text-white/50 text-xs">5 min ago</p>
										</span>
									</div>
								</div>
								<div className="post grid grid-cols-6 overflow-hidden h-24 lg:h-28  gap-2 m-1">
									<div className="relative col-span-2  m-1 rounded-md overflow-hidden ">
										<Image
											fill
											alt=""
											src={
												"https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
											}
										/>
									</div>
									<div className="flex flex-col col-span-4 gap-1 my-1 ">
										<span className="text-sm md:text-base dark:text-gray-300 lg: line-clamp-2 leading-4  ">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Quo lore lore
										</span>
										<span className=" dark:text-white/50 text-sm leading-4 line-clamp-1  ">
											Lorem ipsum dolor sit ametnem alias asperiores quis, et
											aut voluptatum delectus sed sapiente excepturi incidunt ad
											nobis, iure quia consequatur.
										</span>
										<span className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4 opacity-50"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
												/>
											</svg>
											<p className=" dark:text-white/50 text-xs">5 min ago</p>
										</span>
									</div>
								</div>
								<div className="post grid grid-cols-6 overflow-hidden h-24 lg:h-28  gap-2 m-1">
									<div className="relative col-span-2  m-1 rounded-md overflow-hidden">
										<Image
											fill
											alt=""
											src={
												"https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
											}
										/>
									</div>
									<div className="flex flex-col col-span-4 gap-1 my-1 ">
										<span className="text-sm md:text-base dark:text-gray-300 lg: line-clamp-2 leading-4  ">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Quo lore lore
										</span>
										<span className=" dark:text-white/50 text-sm leading-4 line-clamp-1  ">
											Lorem ipsum dolor sit ametnem alias asperiores quis, et
											aut voluptatum delectus sed sapiente excepturi incidunt ad
											nobis, iure quia consequatur.
										</span>
										<span className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="currentColor"
												className="w-4 h-4 opacity-50"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
												/>
											</svg>
											<p className=" dark:text-white/50 text-xs">5 min ago</p>
										</span>
									</div>
								</div>{" "} */}
							</div>
							<div className=" flex items-center justify-center border border-solid border-gray-800 hover:bg-violet-600 mx-2 py-2 rounded-lg">
								view more
							</div>
						</div>
					</div>

					<div className="flex flex-col">
						<div>
							{/* <button className=" m-3 p-4 text-2xl font-bold transition duration-150 border-b-2 border-transparent hover:border-purple-500">
							Button
						</button> */}
							<div className="p-2 flex items-center   lg:textLg dark:text-gray-100 font-medium leading-6 ">
								<div className="h-full flex items-center border-b-2 border-transparent pr-2 border-purple-500 p-1">
									{" "}
									<span>
										<svg
											className="h-8 w-8 p-1 opacity-70"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												strokeLinecap="round"
												strokeLinejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												{" "}
												<path
													d="M6.5 13L7.28446 14.5689C7.54995 15.0999 7.68269 15.3654 7.86003 15.5954C8.01739 15.7996 8.20041 15.9826 8.40455 16.14C8.63462 16.3173 8.9001 16.4501 9.43108 16.7155L11 17.5L9.43108 18.2845C8.9001 18.5499 8.63462 18.6827 8.40455 18.86C8.20041 19.0174 8.01739 19.2004 7.86003 19.4046C7.68269 19.6346 7.54995 19.9001 7.28446 20.4311L6.5 22L5.71554 20.4311C5.45005 19.9001 5.31731 19.6346 5.13997 19.4046C4.98261 19.2004 4.79959 19.0174 4.59545 18.86C4.36538 18.6827 4.0999 18.5499 3.56892 18.2845L2 17.5L3.56892 16.7155C4.0999 16.4501 4.36538 16.3173 4.59545 16.14C4.79959 15.9826 4.98261 15.7996 5.13997 15.5954C5.31731 15.3654 5.45005 15.0999 5.71554 14.5689L6.5 13Z"
													stroke="currentColor"
													strokeWidth="1.464"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>{" "}
												<path
													d="M15 2L16.1786 5.06442C16.4606 5.79765 16.6016 6.16426 16.8209 6.47264C17.0153 6.74595 17.254 6.98475 17.5274 7.17909C17.8357 7.39836 18.2024 7.53937 18.9356 7.82138L22 9L18.9356 10.1786C18.2024 10.4606 17.8357 10.6016 17.5274 10.8209C17.254 11.0153 17.0153 11.254 16.8209 11.5274C16.6016 11.8357 16.4606 12.2024 16.1786 12.9356L15 16L13.8214 12.9356C13.5394 12.2024 13.3984 11.8357 13.1791 11.5274C12.9847 11.254 12.746 11.0153 12.4726 10.8209C12.1643 10.6016 11.7976 10.4606 11.0644 10.1786L8 9L11.0644 7.82138C11.7976 7.53937 12.1643 7.39836 12.4726 7.17909C12.746 6.98475 12.9847 6.74595 13.1791 6.47264C13.3984 6.16426 13.5394 5.79765 13.8214 5.06442L15 2Z"
													stroke="currentColor"
													strokeWidth="1.464"
													strokeLinecap="round"
													strokeLinejoin="round"
												></path>{" "}
											</g>
										</svg>
									</span>{" "}
									<span className="pl-1 font-bold"> Trending Projects</span>
								</div>
							</div>
						</div>
						<TrendingSection />
					</div>

					<div className="new my-12 ">
						<EarlySection />{" "}
					</div>
					<div className="mx-auto  w-full px-6 ">
						<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-24">
							<h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
								Keep Updated
							</h2>
							<p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
								Keep pace with SecureCloud advancements! Join our mailing list
								for selective, noteworthy updates.
							</p>
							<form className="mx-auto mt-10 flex max-w-md gap-x-4">
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
									placeholder="Enter your email"
								/>
								<button
									type="submit"
									className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>
									Notify me
								</button>
							</form>
							<svg
								viewBox="0 0 1024 1024"
								className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
								aria-hidden="true"
							>
								<circle
									cx={512}
									cy={512}
									r={512}
									fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
									fillOpacity="0.7"
								></circle>
								<defs>
									<radialGradient
										id="759c1415-0410-454c-8f7c-9a820de03641"
										cx={0}
										cy={0}
										r={1}
										gradientUnits="userSpaceOnUse"
										gradientTransform="translate(512 512) rotate(90) scale(512)"
									>
										<stop stopColor="#7775D6" />
										<stop offset={1} stopColor="#7ED321" stopOpacity={0} />
									</radialGradient>
								</defs>
							</svg>
						</div>
					</div>
				</main>
			</Container>
			<Footer />
		</>
	);
};

export default MainPage;
