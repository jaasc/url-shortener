import React, { useEffect, useRef, useState } from "react";

function Shorten(){
    const [url, setURL] = useState(() => JSON.parse(localStorage.getItem("urlList")) || []);
    const [shorten, setShorten] = useState("");
    const [warning, setWarning] = useState(false);
    const [errorLink, setErrorLink] = useState(false);
    const [copy, setCopy] = useState("");
    const inputRef = useRef(null);

    async function shortenURL(e){
        e.preventDefault();
        if (shorten){
            setWarning(false);
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${shorten}`);
            const data = await res.json();
            if (data.ok){
                setURL(urL => [...urL, {isCopied: false, data}]);
                setErrorLink(false);
            } else setErrorLink(true);
            
        }else{
            inputRef.current.focus();
            setWarning(true);
        }
    }

    useEffect(() => {
        localStorage.setItem("urlList", JSON.stringify(url));
        setShorten("");
    }, [url])

    function copyURL(copiedURL){
        navigator.clipboard.writeText(copiedURL);
        setURL(url.map(link => 
            (link.data.result.full_short_link === copiedURL) ? ({...link, isCopied: true}) : link));
        setCopy(copiedURL);
    }

    function deleteURL(copiedURL){
        setURL(url.filter(link => (link.data.result.full_short_link !== copiedURL)))
    }

    useEffect(() => {
        copy && setTimeout(() => {
            setURL(url.map(link => 
                (link.data.result.full_short_link === copy) ? ({...link, isCopied: false}) : link));
        }, 2000)
    }, [copy])

    return(
        <div className=" bg-split-bg pt-[3em]">
            <div className="bg-split-bg">
                <form 
                    onSubmit={shortenURL}
                    className={`w-[80%] bg-darkViolet bg-shorten-mobile bg-right-top bg-topRight bg-no-repeat rounded-xl mx-[auto] px-[1.5em] pt-[2em] pb-[1.8em] ${warning || errorLink ? 'sm:pb-[.3em]' : ' sm:pb-[2em]'} flex flex-col justify-center sm:flex-row sm:bg-shorten-desktop sm:bg-cover`}>
                    <div className="sm:w-[75%] sm:mr-[1em]">
                        <input 
                            ref={inputRef}
                            type="text" 
                            value={shorten}
                            placeholder="Shorten a link here..."
                            className={`rounded-lg w-[100%] text-[18px] px-[1em] py-[1em] text-[18px] ${warning && 'focus:outline-red placeholder-red'}`}
                            onChange={e => setShorten(e.target.value)}
                            />
                        <p className={`${!warning && 'hidden'} text-red italic mt-[.5em] text-[14px] ${!warning && 'hidden'}`}>
                            Please add a link</p>
                        <p className={`${!errorLink && 'hidden'} text-red italic mt-[.5em] text-[14px] ${!errorLink && 'hidden'}`}>
                            Error shortening this link</p>
                    </div>

                    <button 
                        className="bg-cyan h-fit text-[white] text-[18px] font-[700] rounded-lg px-[1.5em] py-[1em] mt-[1em] font-[500] cursor-pointer hover:bg-cyan/[60%] sm:w-[30%] sm:px-[0] sm:mt-[0]"
                        type="submit" 
                        >
                        Shorten It!</button>
                </form>
            </div>

            <div className="bg-gray pt-[2em] pb-[2em]">
                {
                    url.map(uRl => 
                        <div 
                            key={uRl.data.result.code}
                            className="w-[80%] bg-[white] px-[1.5em] md:px-[2em] rounded-xl mb-[1em] mx-[auto] py-[1em] flex flex-col flex-wrap justify-between md:items-center md:flex-row">
                            <p className="w-[100%] font-[500] md:max-w-[200px] lg:max-w-[350px] truncate">
                                {uRl.data.result.original_link.substring(7)}</p>
                            <hr className="mt-[2em] absolute left-0 right-0 mx-[auto] text-grayishViolet opacity-[50%] w-[80%] md:hidden"/>
                            <p className="font-[500] text-cyan mt-[1em] md:mt-[0] md:ml-[auto] md:mr-[1em]">
                                {uRl.data.result.full_short_link.substring(8)}</p>
                            <div className="flex mt-[1em] md:my-[.5em]">
                                <button 
                                    className={`h-fit text-[white] w-[100%] text-[16px] rounded-lg px-[1em] py-[.8em] font-[500] cursor-pointer hover:opacity-[60%] ${uRl.isCopied ? 'bg-darkViolet' : ' bg-cyan'}`}
                                    onClick={() => copyURL(uRl.data.result.full_short_link)}
                                    >
                                    {uRl.isCopied ? 'Copied!' : 'Copy'}</button>
                                <button 
                                    className="h-fit text-[white] w-[100%] text-[16px] ml-[.5em] rounded-lg px-[1em] py-[.8em] font-[500] cursor-pointer hover:opacity-[60%] bg-cyan"
                                    onClick={() => deleteURL(uRl.data.result.full_short_link)}
                                    >
                                    Delete</button>
                            </div>
                        </div>
                        )
                }
            </div>
        </div>
    )
}

export default Shorten;