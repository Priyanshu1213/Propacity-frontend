import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Filmspage.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const StarshipsPage = () => {
  const [starships, setStarships] = useState([]);
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
    // Fetch starships data from the SWAPI API and update the state
    const fetchStarships = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/starships/');
        setStarships(response.data.results);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    };

    fetchStarships();
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
      <div className='title'>Starships</div>
      <button className='btu' onClick={toggleView}>{isGridView ? 'List' : 'Grid'}</button>
      </div>      {isGridView ? (
        <div className="film-grid">
          {starships.map((starship) => (
            <div className="film-item" key={starship.url}>
                <img onClick={toggleDrawer('right', true)} src={`https://picsum.photos/200/200`} alt={`Starship - ${starship.name}`} />
              <div className="film-details">
                <div className='f1'>{starship.name}</div>
                <MoreVertIcon    />
                {/* <p>Model: {starship.model}</p>
                <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="film-list">
          {starships.map((starship) => (
            <li key={starship.url}>
              {/* <div className="film-details"> */}
                <div className='f2'>{starship.name}</div>
                <div className='f3'>Model: {starship.model}</div>
                <div className='f4'>Hyperdrive Rating: {starship.hyperdrive_rating}</div>
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

export default StarshipsPage;
