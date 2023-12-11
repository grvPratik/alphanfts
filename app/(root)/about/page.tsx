import React from "react";

import Container from "@/components/container";
const AboutPage = () => {
	return (
		<Container>
			<div className="my-12 flex flex-col ">
				<div className="flex w-full items-center justify-center flex-col gap-2">
					<svg
						version="1.0"
						xmlns="http://www.w3.org/2000/svg"
						width="90px"
						height="90px"
						className="rounded-2xl"
						viewBox="0 0 150.000000 150.000000"
						preserveAspectRatio="xMidYMid meet"
					>
						<g
							transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
							fill="#000000"
							stroke="none"
						>
							<path
								d="M0 750 l0 -750 750 0 750 0 0 750 0 750 -750 0 -750 0 0 -750z m656
411 c60 -27 109 -83 135 -154 12 -34 25 -65 28 -69 3 -4 26 49 50 117 l45 125
64 0 c77 0 79 27 -21 -245 l-74 -200 47 -139 c36 -108 51 -142 68 -149 17 -8
27 -6 42 8 17 15 20 31 20 97 l0 78 61 0 61 0 -4 -104 c-2 -87 -7 -109 -24
-132 -35 -47 -70 -67 -127 -72 -92 -7 -146 35 -188 150 l-26 71 -18 -52 c-39
-107 -127 -171 -235 -171 -69 0 -148 35 -183 82 -54 71 -57 88 -57 350 0 223
2 247 21 288 27 60 54 88 114 116 62 29 143 31 201 5z"
							/>
							<path
								d="M515 1050 c-11 -4 -31 -20 -45 -35 l-25 -27 0 -238 0 -239 29 -30
c31 -32 79 -47 119 -37 44 11 74 54 116 171 l42 115 -37 117 c-20 65 -43 131
-51 146 -27 52 -96 79 -148 57z"
							/>
						</g>
					</svg>
					<h1 className="text-2xl font-bold">Alpha Nfts</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
					perferendis molestias velit blanditiis recusandae eos. Consequatur
					vero, hic dolores dolore vel tempora? Molestias vel dolor voluptatibus
					amet iure rerum provident.
				</p></div>

				
			</div>
		</Container>
	);
};

export default AboutPage;
