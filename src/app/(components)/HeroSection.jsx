'use client'
import React, { useEffect, useRef, useState } from 'react'
import FancyHeader from './FancyHeader';
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import Header1 from './Header1';
function HeroSection() {

    const headerRef = useRef(null);

    const [showHeader, setShowHeader] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        console.log(headerRef)
        setHeaderHeight(headerRef.offsetHeight);

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            console.log('scrollPosition', scrollPosition)
            console.log('header height', headerRef.offsetHeight)
            if (scrollPosition > headerHeight) {
                setShowHeader(true);
            } else {
                setShowHeader(false);
            }
            console.log('showHeader', showHeader)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const [sliders, setSliders] = useState([
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic1-1.jpg'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic5.jpg'
        }
    ]);
    return (
        <>
            <div >
                <div style={{ backgroundImage: `url('${sliders[1].bg}')` }} className="min-h-[100vh] bg-cover bg-no-repeat bg-center">
                    <div className="xl:w-[70%] mx-auto">
                        <div className='text-md text-white py-4 flex items-center gap-5 *:flex *:items-center *:justify-center *:gap-1'>
                            <div>Help Desk 24/7</div>
                            <div><FaPhone /> +61 (0) 383 766 284</div>
                            <div><MdOutlineAttachEmail /> noreply@envato.com</div>
                        </div>

                        <FancyHeader ref={headerRef} />
                    </div>
                </div>
                <div className='bg-white my-5 sticky top-0 left-0'>
                    <div className='xl:w-[70%] mx-auto'>
                        <Header1 />
                    </div>
                </div>
                <div className='h-[2000px]'>
        
                </div>
            </div>
        </>
    )
}

export default HeroSection