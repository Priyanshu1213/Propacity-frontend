import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';





export default function Accodian() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const accordionStyle = {
    backgroundColor: '#03123D', 
    color: '#FFFFFF'
  }


 



  return (
    
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
          <Typography >
            Movies
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
          <Typography >
            Charectors
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
          <Typography >
            Planets
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
          <Typography>
            Species
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
          <Typography>
            Starships
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
          <Typography>
            Vehicles
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  
  

  );
}
