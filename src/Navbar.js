import React from 'react'
import './Filmspage.css'

export default function Navbar(props) {
  
  const handleCategoryChange = () => {
    props.parentCallback('logo');
  };
  return (
    <div className='n1'>
        <img  onClick={ handleCategoryChange} alt='Logo' src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'/>

        
    </div>
  )
}
