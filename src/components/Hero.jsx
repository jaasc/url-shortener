import React from "react";
import heroImg from "../assets/images/illustration-working.svg";

function Hero(){
    return(
        <div className="min-h-[70vh] md:min-h-0 md:max-h-[500px] overflow-hidden sm:flex sm:flex-row-reverse sm:items-center pt-[2em]">
            <div className="sm:w-[55%] md:w-[50%] ml-[1em] mr-[-1em]">
                <img 
                    src={heroImg} 
                    alt="illustration working"
                    className="h-[100%]"
                    />
            </div>

            <div className="text-center px-[2em] py-[3em] mx-[auto] sm:w-[45%] md:w-[50%] sm:text-left max-w-[450px]">
                <h1 className="font-[700] text-veryDarkBlue text-4xl leading-[1.1] lg:text-5xl lg:leading-[1.2]">
                    More than just shorter links</h1>
                <p className="text-grayishViolet py-[1em] text-[18px] leading-[1.8]">
                    Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button className="bg-cyan text-[white] rounded-3xl px-[1.8em] py-[.8em] mt-[1em] font-[700] text-[18px] cursor-pointer hover:bg-cyan/[60%]">
                    Get Started</button>
            </div>
        </div>
    )
}

export default Hero;