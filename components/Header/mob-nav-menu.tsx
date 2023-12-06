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

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="flex text-letter items-center justify-between text-lg font-medium leading-6 text-gray-900"
									>
										<div>AlphaNFTs </div>
										<div>
											<button
												type="button"
												className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
												onClick={closeModal}
											>
												<XMarkIcon className="h-4 w-4" />
											</button>
										</div>
									</Dialog.Title>
									<div className="mt-2">
										<div className=" text-gray-500 flex flex-col gap-2 mb-12">
											<Link href={"/"}>Mints</Link>
											<Link href={"/"}>Resources</Link>
											<Link href={"/"}>About</Link>
										</div>
									</div>

									<div className="mt-4"></div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
