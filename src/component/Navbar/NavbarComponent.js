import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 shadow-lg">
            <div className="container mx-auto flex items-center  px-8 py-6  ">
                <a className="navbar-brand flex items-center text-lg font-semibold text-white">
                    <img src="/image/img.png" alt="CSTAD" className="w-12 h-12 mr-4" />
                    CSTAD
                </a>
                <div className="px-56">
                        <ul className="flex text-white ">
                            <li className="">
                                <a className=" px-4 font-semibold text-white" href="">Home</a>
                            </li>
                            <li className="">
                                <a className=" px-4 font-semibold text-white" href="">Enroll</a>
                            </li>
                            <li className="">
                                <a className=" px-4 font-semibold text-white" href="">Course</a>
                            </li>
                            <li className="">
                                <a className=" px-4 font-semibold text-white" href="">IT News</a>
                            </li>
                            <li className="">
                                <a className=" px-4 font-semibold text-white" href="">Job Opportunity</a>
                            </li>
                            <li className="">
                                <a className=" px-4 font-semibold text-white" href="">About Us</a>
                            </li>
                        </ul>

                    </div>
            </div>
        </nav>
    );
};

export default Navbar;
