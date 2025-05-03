"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left"> 
            <h1 className="text-[#393031] mb-4 text:4xl sm:text-5xl lg:text-6xl font-extrabold">
            Hello! I'm {" "}
            <br></br>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Yumi Kim',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'A Software Engineer',
        1500,
        'A Creative',
        1500,
        'A Music Lover',
        1500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
            </h1>
        <p className="text-[#393031] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my page:)
        </p>
        <div>
        <Link href="/page/#about">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#F2DCDF] hover:bg-[#DF2E2E] text-[#393031]">
                Resume
            </button>
            </Link>
            {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-[#DF2E2E] text-[#393031] border border-[#F2DCDF] mt-3 mb-3">
                Resume
            </button> */}
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
  <div className="rounded-full bg-[#F2DCDF] w-[400px] h-[400px]">
    <div className="image-container" style={{ marginTop: '50px', position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
      <Image
        src="/images/yumi-miffy.png"
        alt="miffy Image"
        width={500}
        height={500}
      />
      <Image
        src="/images/wave-miffy-text.png"
        alt="wave miffy Image"
        width={500}
        height={500}
        className="hover-image"
      />
    </div>
  </div>
</div>
      </div>
    </section>
    );
};

export default HeroSection