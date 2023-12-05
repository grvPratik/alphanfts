
import React from 'react'

import ClientFilter from '@/components/client-filter';
import Balancer from 'react-wrap-balancer';


const MintPage = () => {
  return (
		<main className="">
			<div className="md:mt-[5rem]  mx-4 sm:mx-6 md:mx-8 lg:mx-10 ">
				<div className=" md:text-6xl text-4xl font-bold text-left p-2">
					<Balancer> Explore the Upcoming Projects </Balancer>
				</div>
				<div className="p-2 text-left leading-tight">
					Finding projects can be challenging, but our dedicated team ensures you never
					miss a rewarding opportunity. Let&apos;s pave your path to blockchain
					success. Happy minting!
				</div>
			</div>
			<ClientFilter />
		</main>
	);
}

export default MintPage













		