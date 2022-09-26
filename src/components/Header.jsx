import React, { useState } from "react";
import hamburger from "../assets/images/icon-hamburger.svg";
import logo from "../assets/images/logo.svg";

function Header(){
    const navigation = ["Features", "Pricing", "Resources"];
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
        <div className="flex h-[10vh] items-center px-[1em] sm:px-[2em] lg:px-[3em] mt-[1em]">
            <div className="mr-[3em]">
                <img src={logo} alt="Shortly"/>
            </div>

            <img 
                src={hamburger} 
                alt="menu"
                className="ml-[auto] sm:block md:hidden cursor-pointer"
                onClick={() => setToggleMenu(!toggleMenu)}
                />

            <div className={`items-center space-between w-full md:flex
                    ${toggleMenu ? 'bg-darkViolet absolute w-[80%] inset-x-0 top-0 mx-[auto] mt-[13vh] p-[2em] rounded-lg' : 'hidden'}`}>
                <nav>
                    <ul className={`flex ${toggleMenu && 'flex-col text-center'}`}>
                        {
                            navigation.map(nav => 
                            <li 
                                key={nav}
                                className={`mr-[2em] text-grayishViolet font-[500] cursor-pointer hover:text-veryDarkViolet
                                    ${toggleMenu && 'mb-[1em] mr-[0] text-[white] hover:text-[white]'}`}
                                >
                                {nav}</li>)
                        }
                    </ul>
                </nav>

                <hr className={`${!toggleMenu && 'hidden'} text-grayishViolet opacity-[50%]`}/>
                
                <div className={`flex ml-auto ${toggleMenu && 'flex-col'}`}>
                    <button className={`mr-[2em] text-grayishViolet font-[500] cursor-pointer hover:text-veryDarkViolet
                            ${toggleMenu && 'my-[1em] mr-[0] text-[white] hover:text-[white]'}`}>
                        Login</button>
                    <button className="bg-cyan text-[white] rounded-3xl px-[1.5em] py-[.5em] font-[500] cursor-pointer hover:bg-cyan/[60%]">
                        Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Header;