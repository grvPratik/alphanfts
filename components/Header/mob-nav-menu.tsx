import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { Fragment, useState } from "react";

interface MobNavMenuProps {
	isOpen: boolean;
	setIsOpen: (value: boolean) => void;
}
export default function MobNavMenu({ isOpen, setIsOpen }: MobNavMenuProps) {
	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50 md:hidden "
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 ">
						<div className="flex h-full items-end justify-center text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-in-out duration-300"
								enterFrom="opacity-0 translate-y-full"
								enterTo="opacity-100 translate-y-0"
								leave="ease-in-out duration-200"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-full"
							>
								<Dialog.Panel className="w-full max-w-md  overflow-hidden rounded-t-2xl bg-background p-6 text-left  shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="flex text-letter items-center justify-between text-lg font-medium leading-6 text-gray-900"
									>
										<div>AlphaNFTs </div>
									</Dialog.Title>
									<div className="mt-2">
										<div className=" text-gray-500 flex flex-col gap-2 mb-12">
											
											<div className="py-2 rounded-lg">
												<Link  href="/mints">
													Mints
												</Link>
											</div>
											<div className="py-2 rounded-lg">
												<Link href={"/"}>Resources</Link>
											</div>
											<div className="py-2 rounded-lg">
												<Link href={"/"}>About</Link>
											</div>
										</div>
									</div>

									<div className="mt-2">
										<button
											type="button"
											className="inline-flex justify-center rounded-full border border-transparent font-medium w-full bg-black text-white p-2 "
											onClick={closeModal}
										>
											close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
