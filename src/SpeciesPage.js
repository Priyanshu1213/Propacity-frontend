import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Filmspage.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const SpeciesPage = () => {
  const [species, setSpecies] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    // Fetch species data from the SWAPI API and update the state
    const fetchSpecies = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/species/');
        setSpecies(response.data.results);
      } catch (error) {
        console.error('Error fetching species:', error);
      }
    };

    fetchSpecies();
  }, []);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ><div>
      hello
    </div>
      
    </Box>)

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div className="film-page">
      <div className='button'>
      <div className='title'>Species</div>
      <button className='btu' onClick={toggleView}>{isGridView ? 'List' : 'Grid'}</button>
      </div>
      {isGridView ? (
        <div className="film-grid">
          {species.map((specie) => (
            <div className="film-item" key={specie.url}>
                <img onClick={toggleDrawer('right', true)} src={`https://picsum.photos/200/300`} alt={`Specie - ${specie.name}`} />
              <div className="film-details">
                <div className='f1'>{specie.name}</div>
                <MoreVertIcon    />
                {/* <p>Homeworld: {specie.homeworld}</p>
                <p>Lifespan: {specie.lifespan}</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="film-list">
          {species.map((specie) => (
            <li key={specie.url}>
              {/* <div className="specie-details"> */}
                <div className='f2'>{specie.name}</div>
                <div className='f3'>Homeworld: {specie.homeworld}</div>
                <div className='f4'>Lifespan: {specie.lifespan}</div>
                <MoreVertIcon    />
              {/* </div> */}
            </li>
          ))}
        </ul>
      )}
<div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
                    

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>

    </div>
  );
};

export default SpeciesPage;
