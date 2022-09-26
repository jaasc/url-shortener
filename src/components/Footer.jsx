import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import instagram from "../assets/images/icon-instagram.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import twitter from "../assets/images/icon-twitter.svg";
import logo from "../assets/images/logo.svg";
import footerlist from "../footerlist";

function Footer(){
    const socials = [facebook, twitter, pinterest, instagram]

    return(
        <div className="bg-veryDarkViolet text-grayishViolet text-center py-[3em] md:flex md:px-[1.5em] lg:px-[3em]">
            <div>
                <img 
                    src={logo} 
                    alt="Shortly"
                    className="brightness-0 saturate-100 invert w-[121px] mx-[auto]"
                    />
            </div>

            <div className="my-[3em] sm:flex sm:px-[2em] md:px-[0] md:my-[0] md:ml-[auto] md:text-left">
                {
                    footerlist.map((list, index) => 
                        <div 
                            key={index}
                            className={`sm:w-[100%] md:w-fit ${(index+1)%2 === 0 && 'my-[2em] sm:my-[0] md:mx-[2em] lg:mx-[5em]'}`}
                            >
                            <h4 className="text-[white] font-[500] mb-[1em]">
                                {list.title}</h4>
                            {list.sub.map(sub => 
                                <a 
                                    key={sub}
                                    href="#" 
                                    className="block leading-[2] hover:text-cyan"
                                    >
                                    {sub}</a>
                            )}
                        </div>
                    )
                }
            </div>

            <div className="flex justify-center h-[25px] md:ml-[2em] lg:ml-[5em]">
                {
                    socials.map((social, index) => 
                        <a 
                            href="#" 
                            className="block" 
                            key={index}
                            >
                            <img 
                                src={social} 
                                alt={social} 
                                className={`${index === 1 && 'mx-[1.5em]'} ${index === 3 && 'ml-[1.5em]'} h-[100%] hover:scale-[1.1]`}/>
                        </a>
                        )
                }
            </div>
        </div>
    )
}

export default Footer;