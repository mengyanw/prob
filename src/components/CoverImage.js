import React from "react";
import "./CoverImage.css"

const CoverImage = ({coverSrc}) => {
    return (
        <img className="cover-image" src={coverSrc} alt="cover"/>
    )
}

export default CoverImage;