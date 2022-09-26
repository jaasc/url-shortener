import React from "react";
import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";
import featurelist from "../featurelist";

function Features(){
    const iconList = [brandRecognition, detailedRecords, fullyCustomizable]

    return(
        <div className="bg-gray text-center px-[2em] pt-[3em] pb-[6em]">
            <div className="px-[1.5em] mb-[3em]">
                <h2 className="text-3xl font-[700] text-veryDarkBlue">
                    Advanced Statistics</h2>
                <p className="text-grayishViolet leading-[1.8] mt-[1.5em] max-w-[500px] mx-[auto]">
                    Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className="lg:flex">
                {
                    featurelist.map((feature, index) =>
                        <div 
                            key={feature.title}
                            className="lg:flex"
                            >
                            <div className={`lg:mt-[${index*44}px]`}>
                            {/* <div className={`${index === 1 ? 'lg:mt-[44px]' : index === 2 ? 'lg:mt-[88px]' : 'lg:mt-[0]'}`}> */}
                                <div className="bg-darkViolet rounded-[50%] p-[1.5em] h-[88px] w-fit mx-[auto] z-50 relative">
                                    <img 
                                        src={feature.image} 
                                        alt={feature.title}
                                        className=""
                                        />
                                </div>

                                <div className="bg-[white] pt-[5em] pb-[3em] px-[1.5em] mt-[-44px] z-0 max-w-[550px] mx-[auto] lg:text-left">
                                    <h3 className="text-2xl font-[700] text-veryDarkBlue mb-[1em]">
                                        {feature.title}</h3>
                                    <p className="text-grayishViolet leading-[1.8]">
                                        {feature.description}</p>
                                </div>
                            </div>

                            {
                                index < featurelist.length-1 && 
                                    <hr className="w-[10px] h-[50px] bg-cyan border-none mx-[auto] lg:w-[60px] lg:h-[8px] lg:self-center"/>
                            }
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default Features;