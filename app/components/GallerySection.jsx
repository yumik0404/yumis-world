import React from 'react'
import GalleryCard from './GalleryCard'
import Link from 'next/link';

const galleryData = [
    {
        id: 1,
        title: "Singing",
        description: "sing",
        image: "/images/singing.jpeg",
        tag: ["All", "Web"],
    },
    {
        id: 2,
        title: "Food",
        description: "food",
        image: "/images/food.png",
        tag: ["All", "Web"],
    },
    {
        id: 3,
        title: "Travel and Photography",
        description: "lanterns from japan",
        image: "/images/travel-photography.JPG",
        tag: ["All", "Web"],
    },
    {
        id: 4,
        title: "Travel and Photography",
        description: "lanterns from japan",
        image: "/images/tokyo-billboards.JPG",
        tag: ["All", "Web"],
    },
    {
        id: 5,
        title: "Travel and Photography",
        description: "lanterns from japan",
        image: "/images/kyoto-garden.JPG",
        tag: ["All", "Web"],
    },
    {
        id: 6,
        title: "Travel and Photography",
        description: "lanterns from japan",
        image: "/images/japan-kitchen.JPG",
        tag: ["All", "Web"],
    },
    {
        id: 7,
        title: "Travel and Photography",
        description: "lanterns from japan",
        image: "/images/thailand-mountain.JPG",
        tag: ["All", "Web"],
    },
    {
        id: 8,
        title: "Travel and Photography",
        description: "lanterns from japan",
        image: "/images/korea-palace.JPG",
        tag: ["All", "Web"],
    },
];
const GallerySection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-[#393031] mt-4 pb-7">
        Gallery
        </h2>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {galleryData.map((gallery) => (
            <GalleryCard
            key={gallery.id}
            title={gallery.title}
            description={gallery.description}
            imgUrl={gallery.image}
            tags={gallery}
            />
            ))}
    </div>
    </>
  )
}

export default GallerySection