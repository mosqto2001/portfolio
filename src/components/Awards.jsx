import React from "react";
import AwardItem from "./AwardItem";

export default function Awards() {
  const awards = [
    {
      name: "Winner of 42Bangkok Virtual Hackathon 2021",
      description:
        'I am a winner of The virtual hackathon by 42Bangkok and CPF within the theme "Coding and AI for Agriculture and Food Technology". I created the food supply chain model applied to blockchain. Additionally, I created the prototype application by using Figma.',
      date: "Jun 26 - 27, 2021",
      image: "virtual_hackathon",
      hasProject: true
    },   {
        name: "SIT Academic Excellence Scholarship",
        description:
          'Achieve academic excellence and academic activities"',
        date: "Sep 18, 2022",
        image: "sit",
      },
  ];

  return (
    <div className="awards w-full">
      <h1 className="mt-24 text-3xl text-dark-900 py-36 bg-yellow-100 font-bold sm:text-6xl tracking-wider text-center">
        MY AWARDS
      </h1>
      <div className="mt-32 mx-16 gap-y-16 flex flex-col justify-center items-center">
        {awards.map((award,index) => <AwardItem award={award} key={index} />)}
      </div>
    </div>
  );
}
