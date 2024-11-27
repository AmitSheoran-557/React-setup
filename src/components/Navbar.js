import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className="flex justify-between bg-black items-center xl:pt-[35px] px-4 lg:pt-7 pt-5 xl:pb-[26px] lg:pb-5 pb-4">
                <div>
                    <h1 className='font-bold uppercase text-6xl text-blue-700'>{props.title} <span className='text-red-700 font-extrabold'>{props.second}</span> </h1>
                </div>
                <div className="flex menulist justify-center lg:items-center items-center duration-300 ease-linear text-white w-full -right-full min-h-screen fixed top-0 backdrop-blur-[40px] bg-black bg-opacity-[80%] z-[100] lg:relative lg:min-h-fit lg:w-fit lg:flex-row lg:right-0 lg:bg-transparent">
                    <div
                        className="font-oswald xl:text-[22px] lg:text-xl text-sm text-white lg:gap-[40px] gap-[37px] flex max-lg:flex-col max-lg:text-center">
                        <a className="hover:text-primary duration-300 ease-linear" href="#about">{props.about}</a>
                        <a className="hover:text-primary duration-300 ease-linear" href="#story">{props.story}</a>
                        <a className="hover:text-primary duration-300 ease-linear" href="#traits">Traits</a>
                        <a className="hover:text-primary duration-300 ease-linear" href="#roadmap">Roadmap</a>
                        <a className="hover:text-primary duration-300 ease-linear" href="#team">Team</a>
                        <a className="hover:text-primary duration-300 ease-linear" href="#faq">FAQ</a>
                    </div>
                </div>
                <div id="menu-bar"
                    className="flex flex-col lg:hidden menubar text-end justify-between cursor-pointer z-[200] scroll-m-0  w-[32px] h-5 pt-[1px]">
                    <span
                        className="w-7 h-[2px] mb-[1px] rounded-lg bg-white menubarFirst origin-left  duration-300 ease-linear"></span>
                    <span className="w-7 h-[2px] mb-[1px] rounded-lg bg-white menubarSecond"></span>
                    <span
                        className="w-7 h-[2px] mb-[1px] rounded-lg bg-white menubarThird origin-left  duration-300 ease-linear"></span>
                </div>
            </nav>
        </div>
    )
}
