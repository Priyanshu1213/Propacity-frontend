import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Filmspage.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
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
    // Fetch planets data from the SWAPI API and update the state
    const fetchPlanets = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/planets/');
        setPlanets(response.data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ><div>
      Hello
    </div>
      
    </Box>)

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <div className="film-page">
      <div className='button'>
      <div className='title'>Planets</div>
      <button className='btu' onClick={toggleView}>{isGridView ? 'List' : 'Grid'}</button>
      </div>
      {isGridView ? (
        <div className="film-grid">
          {planets.map((planet) => (
            <div className="film-item" key={planet.url}>
              <img onClick={toggleDrawer('right', true)} src={`https://picsum.photos/200/200`} alt={`Planet - ${planet.name}`} />
              <div className="film-details">
              <div className='f1'>{planet.name}</div>
              <MoreVertIcon    />
              {/* <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="film-list">
          {planets.map((planet) => (
            <li key={planet.url}>
              <div className='f2'>{planet.name}</div>
              <div className='f3'>Climate: {planet.climate}</div>
              <div className='f4'>Gravity: {planet.gravity}</div>
              <MoreVertIcon    />
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

export default PlanetsPage;
