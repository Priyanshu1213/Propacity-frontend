import React from 'react'
import './Home.css'
// import Accodian from './Accodian'
import Dashboard from './Dashboard'
import FilmsPage from './FilmsPage'
import PeoplePage from './Peoplepage'
import PlanetsPage from './PlanetsPage'
import SpeciesPage from './SpeciesPage'
import StarshipsPage from './StarshipsPage'
import VehiclesPage from './VehiclesPage'
import Navbar from './Navbar'

// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react'

export default function Home() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const accordionStyle = {
    backgroundColor: '#03123D', 
    color: 'white'
  }



  const [activeCategory, setActiveCategory] = useState('');

  const handleCallback = (childData) => {
    setActiveCategory(childData);
};
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    
  };
  

  const renderCategoryPage = () => {
    
    switch (activeCategory) {
      case 'films':
        return <FilmsPage />;
      case 'people':
        return <PeoplePage />;
      case 'planets':
        return <PlanetsPage />;
      // Add more cases for other categories (Species, Starships, Vehicles) if needed
      case 'species':
        return <SpeciesPage />;
        case 'starships':
        return <StarshipsPage />;
        case 'vehicles':
        return <VehiclesPage />;
        case 'logo':
        return <Dashboard/>
      default:
        return <Dashboard/>;
    }
  };






  return (
    <>
    {/* <div className='n1'>
        <img onClick={() => handleCategoryChange('logo')} alt='logo' src='https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254'/>
    </div> */}
     <Navbar parentCallback={handleCallback} />
    
    <div className='container'>

      
      <div className='container1'>
        {/* <Accodian/> */}

        
        
        <div className="accodian_main">
      <Accordion  style={accordionStyle} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary style={accordionStyle}
          expandIcon={<ExpandMoreIcon /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Film</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className='pointer' onClick={() => handleCategoryChange('films')}>
            Movies Name
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>People</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pointer' onClick={() => handleCategoryChange('people')}>
            Charectors Name
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion  style={accordionStyle} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Planets</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pointer' onClick={() => handleCategoryChange('planets')}>
            Planets Name
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion style={accordionStyle} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Species</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pointer' onClick={() => handleCategoryChange('species')}>
            Species Name
          </Typography>
        </AccordionDetails>
      </Accordion>
       <Accordion style={accordionStyle}  expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Starships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pointer' onClick={() => handleCategoryChange('starships')}>
            Starships Name
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={accordionStyle} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Vehicles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='pointer' onClick={() => handleCategoryChange('vehicles')}>
            Vehicles Name
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
      
      
      </div>

      
      <div className='container2'>
      
        {renderCategoryPage()}
       
      </div>
       
    </div>
    </>
  )
}
