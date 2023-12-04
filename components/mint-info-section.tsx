"use client";
import React, { useState } from "react";
import TabSwitch from "./ui/tab-switch";

interface AdditionalInfoProps {
	infoData: {
		requirement?: string;
		info?: string;
		roadmap?: string;
	};
}
const MintInfoSection = ({ infoData }:AdditionalInfoProps) => {
	const [mintInfo, setMintInfo] = useState(0);
	const MintTabTitle = ["WL requirement", "info","details" ];
	return (
		<div className="flex flex-col gap-4">
			<TabSwitch arr={MintTabTitle} setTabCategory={setMintInfo} />
			<div>
				{mintInfo === 0 &&( mintInfo === 0 && infoData.requirement ? (
					<div>{infoData.requirement}</div>
				) : (
					<div className="w-full h-60 flex items-center justify-center">
						no info available
					</div>
                ))}
                


				{mintInfo === 1 &&((mintInfo === 1 && infoData.info) ? (
					<div>{infoData.info}</div>
				) : (
					<div className="w-full h-60 flex items-center justify-center">
						no info available
					</div>
				))}
				{mintInfo === 2 && ((mintInfo === 2 && infoData.roadmap) ? (
					<div>{infoData.roadmap}</div>
				) : (
					<div className="w-full h-60 flex items-center justify-center">
						no info available
					</div>
				))}
			</div>
		</div>
	);
};

export default MintInfoSection;
