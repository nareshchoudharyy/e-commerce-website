'use client'
import React, { useEffect, useRef, useState } from 'react'
import FancyHeader from './FancyHeader';
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import Header1 from './Header1';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const roboto = Roboto({
    weight: '300',
    subsets: ['latin']
});

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
            <div style={{ backgroundImage: `url('${sliders[1].bg}')` }} className="min-h-[100vh] bg-cover bg-no-repeat bg-center">
                <div className="xl:w-[70%] mx-auto">
                    <div className='text-md text-white py-4 flex items-center gap-5 *:flex *:items-center *:justify-center *:gap-1'>
                        <div>Help Desk 24/7</div>
                        <a href='mob:1234567890'>
                            <div><FaPhone /> +61 (0) 383 766 284</div>
                        </a>
                        <a href='mailto:noreply@envato.com'>
                            <div><MdOutlineAttachEmail /> noreply@envato.com</div>
                        </a>
                    </div>
                    <FancyHeader ref={headerRef} />
                    <div className=' flex justify-between items-center relative'>
                        <div className='flex justify-start items-center gap-10 my-[100px] ms-[100px]'>
                            <div className='flex flex-col gap-5'>
                                <Image
                                    src=
                                    "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-arrow1.png"
                                    alt="External Image"
                                    unoptimized
                                    width={25}
                                    height={40}
                                />
                                <Image
                                    src=
                                    "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-arrow2.png"
                                    alt="External Image"
                                    unoptimized
                                    width={25}
                                    height={40}
                                />
                            </div>
                            <div className={roboto.className} >
                                <div className=' text-2xl'>
                                    <div className='text-[28px] flex items-center gap-5'>
                                        2020
                                        <div className='w-[100px] border-b border-black'>
                                        </div>
                                    </div>
                                    <div className='text-[70px] leading-[70px]'>
                                        Summer
                                    </div>
                                    <div className='text-[70px] leading-[70px]'>
                                        Collection
                                    </div>
                                    <div className='text-[13px] font-bold'>
                                        SUMMER SALE | UP TO 50% OFF
                                    </div>
                                </div>
                                <div className='bg-black text-white text-sm rounded-[0px_0px_20px_0px] text-center p-3 my-5 inline-block'>
                                    <Link href='/shop' >Our Collection</Link>
                                </div>
                            </div>
                        </div>
                        <div className='m-[0px_100px_50px_0px]'>
                            <Image
                                src=
                                "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic4.png"
                                alt="External Image"
                                unoptimized
                                width={150}
                                height={200}
                            />
                        </div>
                        <div className="absolute top-[250px] right-[200px]" >
                            <Image
                                src=
                                "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic2.jpg"
                                alt="External Image"
                                unoptimized
                                width={200}
                                height={40} />
                        </div>
                        <div className="absolute top-[180px] right-[-10px]" >
                            <Image
                                src=
                                "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic3.jpg"
                                alt="External Image"
                                unoptimized
                                width={200}
                                height={40} />
                        </div>
                    </div>
                </div>
                {/* <div className='bg-white my-5 sticky top-0 left-0'>
                                    <div className='xl:w-[70%] mx-auto'>
                                        <Header1 />
                                    </div>
                                </div> */}
            </div>
        </>
    )
}

export default HeroSection