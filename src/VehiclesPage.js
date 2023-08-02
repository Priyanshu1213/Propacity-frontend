import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Filmspage.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState([]);
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
    // Fetch vehicles data from the SWAPI API and update the state
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/vehicles/');
        setVehicles(response.data.results);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
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
      <div className='title'>Vehicles</div>
      <button className='btu' onClick={toggleView}>{isGridView ? 'List' : 'Grid'}</button>
      </div>
      {isGridView ? (
        <div className="film-grid">
          {vehicles.map((vehicle) => (
            <div className="film-item" key={vehicle.url}>
                <img onClick={toggleDrawer('right', true)} src={`https://picsum.photos/200/200`} alt={`Vehicle - ${vehicle.name}`} />
              <div className="film-details">
                <div className='f1'>{vehicle.name}</div>
                <MoreVertIcon    />
                {/* <p>Model: {vehicle.model}</p>
                <p>Top Speed: {vehicle.max_atmosphering_speed}</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="film-list">
          {vehicles.map((vehicle) => (
            <li key={vehicle.url}>
              {/* <div className="film-details"> */}
                <div className='f2'>{vehicle.name}</div>
                <div className='f3'>Model: {vehicle.model}</div>
                <div className='f4'>Top Speed: {vehicle.max_atmosphering_speed}</div>
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

export default VehiclesPage;
