import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa"; 
// import copyToClipboard from "modules/copyclipboard"

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav); 
	}


	const copyToClipboard = (text) =>  {
		var input = document.createElement('textarea');
		input.value = text;
		document.body.appendChild(input);
		input.select();
		document.execCommand('copy');
		document.body.removeChild(input);
	  }

	return (
		<div className="fixed w-full h-20 z-[100]">
			<div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
				<Image
					src=""
					alt=""
					width="125"
					height="30"
				/>

				<div>
					<ul className="hidden md:flex my-4">
						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">Home</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">About</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">Skills and Education</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">Projects</li>
						</Link>

						<Link href="/">
							<li className="ml-10 text-sm uppercase btn">Contact</li>
						</Link>
					</ul>

					<div className="md:hidden btn p-5 rounded" onClick={handleNav}>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			<div className={!nav ? 'md:hidden fixed left-100 top-0 w-full h-screen bg-black/70' : ''}>



				<div  className={!nav ? 'fixed left-[100] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FEFAE0] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
					<div>
						<div className="flex w-ful items-center justify-end">

							<div className="btn p-5 rounded-full" onClick={handleNav}>
								<AiOutlineClose />
							</div>
						</div>

						<div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Hi, click buttons :&#41;
							</p>
						</div>
					</div>

					<div>
						<ul className="uppercase py-4 flex flex-col">
							<Link href="/">
								<li className="btn rounded py-4 text-sm">Home</li>
							</Link>
							<Link href="/">
								<li className="btn rounded py-4 text-sm">About</li>
							</Link>
							<Link href="/">
								<li className="btn rounded py-4 text-sm">Off-topic</li>
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
									Let&apos;s chat
								</p>
							<div className="flex item-center justify-between my-4 w-[37%] sm:w[52%]">

								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<Link href="https://www.linkedin.com/in/hareee234/">
									<FaLinkedinIn />
									</Link>
								</div>
								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<Link href="https://github.com/AwesomenessReborn">
									<FaGithub/>
									</Link>
								</div>

								{/* TODO, maybe make a "are you a robot" check */}
								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200">
									<Link href="mailto:hareee234@gmail.com">
									<AiOutlineMail />
									</Link>
								</div>

								{/* TODO make button clickme function work, currently not working */}
								<div className="btn rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-200" onClick={copyToClipboard("Hareee234#1574")}>
									<FaDiscord />
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
