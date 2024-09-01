'use client'
import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import DealsBox from "./(components)/DealsBox";

import { DM_Sans, Roboto } from 'next/font/google';
import { FaChevronRight } from "react-icons/fa";
const roboto = Roboto({
  weight: '300',
  subsets: ['latin']
});
const dmSens = DM_Sans({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  const Deals = [
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg',
      title: 'Quisque lorem tortor',
      price: '£28.00'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg',
      title: 'Curabitur et ligula',
      price: '£11.20'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic6-300x300.jpg',
      title: 'Etiam ullamcorper',
      price: '£12.00'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic5-300x300.jpg',
      title: 'Nulla imperdiet sit amet',
      price: '£25.00'
    }
  ]
  return (
    <div>
      <HeroSection />
      <div className="py-[120px] bg-[#e9f1f4]">
        <div className="xl:w-[70%] mx-auto">
          <div className={roboto.className}>
            <div className='text-xl'>
              Featured
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[65px]">
                Weekly deals
              </div>
              <div className=" w-[50%]"></div>
            </div>
            <div className="my-[50px] flex justify-between">
              {
                Deals.map((value, index) => {
                  return <DealsBox bg={value.bg} title={value.title} price={value.price} />
                })
              }
            </div>
            <div className="py-5 flex items-center justify-around">
              <div className="bg-black text-white p-[10px_15px] flex items-center justify-between gap-3">
                See all products <span> <FaChevronRight /> </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-sectionbg1.jpg')` }} className="py-[120px] bg-fixed ">
        <div className="xl:w-[70%] mx-auto py-5">
          <div className={` ${roboto.className} text-[65px] text-center text-[rgb(22, 25, 34)]`}>
            Who we are
          </div>
          <div className="flex">
            <div className="w-[50%]">
              <Image unoptimized src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-columnbg1.jpg'} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className={`${roboto.className} bg-white w-[50%] py-[80px] text-center p-[50px_50px] flex flex-col justify-around`}>
              <div className="text-3xl">
                Our Story
              </div>
              <div className="text-xl" style={{ color: "rgb(22, 25, 34)" }}>
                Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum eleifend erat at justo fringilla imperdiet id ac magna ac magna.
              </div>
              <div className={`${dmSens.className} text-base`} style={{ color: "rgb(98, 98, 98)" }}>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac magna eu, molestie tortor lorem eget egestas.
              </div>
              <div className={`${dmSens.className} flex items-center justify-around`}>
                <div className="bg-black text-white text-base p-[10px_15px] flex items-center justify-between gap-3">
                  Learn more <span> <FaChevronRight /> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="xl:w-[70%] py-[100px] mx-auto">
          <div className="flex justify-between items-center gap-5">
            <div className="flex flex-col gap-3 items-center p-[20px_10px] text-center" style={{ color: 'rgb(98,98,98)' }}>
              <div>
                <Image unoptimized width={50} height={50} src={"https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon1.png"} />
              </div>
              <div className="text-black">
                Always free shipping
              </div>
              <div>
                Lorem ipsum dolor sit amet mauris dolor bibendum sapien
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center p-[20px_10px] text-center" style={{ color: 'rgb(98,98,98)' }} >
              <div>
                <Image unoptimized width={50} height={50} src={"https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon2.png"} />
              </div>
              <div className="text-black">
                14 day return policy
              </div>
              <div>
                Nulla imperdiet sit amet magna vestibulum dapibus
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center p-[20px_10px] text-center" style={{ color: 'rgb(98,98,98)' }} >
              <div>
                <Image unoptimized width={50} height={50} src={"https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon3.png"} />
              </div>
              <div className="text-black">
                Quick delivery in 48h
              </div>
              <div>
                Nullam wisi ultricies gravida vitae dapibus risus
              </div>
            </div>

            <div className="flex flex-col gap-3 items-center p-[20px_10px] text-center" style={{ color: 'rgb(98,98,98)' }} >
              <div>
                <Image unoptimized width={50} height={50} src={"https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon4.png"} />
              </div>
              <div className="text-black">
                Online payment
              </div>
              <div>
                Lorem ipsum dolor sit amet mauris dolor bibendum sapien
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
