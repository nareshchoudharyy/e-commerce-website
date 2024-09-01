import React from 'react'
import { DM_Sans, Roboto } from 'next/font/google';
import { MdAddShoppingCart } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import Image from 'next/image';

const roboto = Roboto({
    weight: '300',
    subsets: ['latin']
});
const dmSens = DM_Sans({
    weight: '400',
    subsets: ['latin']
});

function DealsBox({ bg, title, price }) {
    return (
        <>
            <div>
                <div className="w-[240px] h-[240px]  overflow-hidden relative group">
                    <Image src={bg} width={240} height={240} unoptimized className=" hover:scale-125 duration-300" />
                    <div className="*:bg-black *:p-3 text-[30px] text-white flex gap-2 absolute top-[40%] left-[30%] duration-300 scale-0 group-hover:scale-100">
                        <div className="cursor-pointer hover:text-black hover:bg-white">
                            <MdAddShoppingCart />
                        </div>
                        <div className="cursor-pointer hover:text-black hover:bg-white">
                            <FaLink />
                        </div>
                    </div>
                </div>
                <div className="my-5 text-xl">
                    <div>
                        {title}
                    </div>
                    <div className={` ${dmSens.className} `}>
                        {price}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealsBox