import React from 'react'
import HeaderImage from '../../assets/background2.jpg';

const headerStyle = {
    width: '100%',
    height: '20rem',
    backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    color: 'white'
}


const HeaderSection = () => {
    return (
        <div style={headerStyle} className="d-flex justify-content-around align-items-center">
            <div><h3>GrabiT</h3></div>
            <div />
        </div>
    )
}

export default HeaderSection
