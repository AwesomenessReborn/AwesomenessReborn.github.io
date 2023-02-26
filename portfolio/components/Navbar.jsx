import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"; 
import { BsFillPersonLinesFill } from 'react-icons/bs'; 

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(true); 
	}

	return (
		<div className="fixed w-full h-20 shadow-xl z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src="/../public/assets/navLogo.png"
					alt=""
					width="125"
					height="30"
				/>

				<div>
					<ul className="hidden md:flex">
						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">
								Home
							</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">
								About
							</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">
								Skills and Education
							</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">
								Projects
							</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">
								Contact
							</li>
						</Link>
					</ul>

					<div className="md:hidden" onClick={handleNav}>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div className={!nav ? 'fixed left-100 top-0 w-full h-screen bg-black/70' : ''}>
				<div className={!nav ? 'fixed left-[100] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FEFAE0] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
					<div>
						<div className="flex w-ful items-center justify-between">
							<Image
								src="/../public/assets/navLogo.png"
								alt=""
								width={87}
								height={35}
							></Image>

							<div className="btn p-5 rounded-full" onClick={handleNav}>
								<AiOutlineClose />
							</div>
						</div>

						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								some random message TBD
							</p>
						</div>
					</div>

					<div>
						<ul className="uppercase py-4 flex flex-col">
							<Link href="/">
								<li className="btn rounded py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="btn roundedpy-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="btn rounded py-4 text-sm">
									Skills and Education
								</li>
							</Link>
							<Link href="/">
								<li className="btn rounded py-4 text-sm">Projects</li>
							</Link>
							<Link href="/">
								<li className="btn rounded py-4 text-sm">Contact</li>
							</Link>
						</ul>

						<div className="pt-40">
								<p className="uppercase tracking-widest">
									Let&apos;s connect
								</p>
							<div className="flex item-center justify-between my-4 w-[50%] sm:w[80%]">

								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<FaLinkedinIn />
								</div>
								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<FaGithub />
								</div>
								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<AiOutlineMail />
								</div>
								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
