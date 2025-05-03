import React from 'react'

const GalleryCard = ({imgUrl, title, description}) => {
  return (
    <div>
        <div 
        className= "h-100 md:h-96 rounded-t-xl rounded-b-xl relative" 
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className=""
            > </div>
        </div>
        <div className="text-[#393031] rounded-b-xl py-6 px-4">
            <h5 className="fontxl font-semibold mb-2">{title}</h5>
            <p className="text-[#DF2E2E]">{description}</p>
        </div>
        </div>
  )
}

export default GalleryCard