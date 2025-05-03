"use client";
import React, { useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';
import Link from 'next/link';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li> Python </li>
                <li> Java </li>
                <li> C/C++ </li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li> West Springfield High School </li>
                <li> University of Virginia </li>
                <br />
                <li> I majored in both Computer Science and Music while at UVA and was heavily involved on Grounds. 
                    There I was able to write  
                    in the food column of my school's newspaper, The Cav Daily. Another one of my major involvements
                    was my position as Music Director of my a cappella group.
                Additionally, I was a member of the university's flaship choir.

                </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li> idk </li>
                <li> idk </li>
                <li> idk </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section className="text-[#393031]"> <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 sm-px-16">
        <Image 
        src="/images/headshot-trans.png"
        alt= "professional headshot"
        width={300}
        height={300}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-[#393031] mb-4">About Me</h2>
            <p className="text-base md:text-lg text-[#393031]">
                My name is Yumi! I am currently a software engineer at Liberty Mutual Insurance working in Solaria Labs, an innovatation lab. In my free time I like to read, 
                sing, shoot pictures and videos, and make art!
            </p>
        <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
        </div>
        <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
        </div>
        </div>
    </div>
    </section>
  )
}

export default AboutSection;