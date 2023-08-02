import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Filmspage.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


const PeoplePage = () => {
  const [people, setPeople] = useState([]);
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
    // Fetch people data from the SWAPI API and update the state
    const fetchPeople = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setPeople(response.data.results);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPeople();
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
      <div className='title'>People</div>
      <button className='btu' onClick={toggleView}>{isGridView ? 'List' : 'Grid'}</button>
      </div>
      {isGridView ? (
        <div className="film-grid">
          {people.map((person) => (
            <div  className="film-item" key={person.url}>
              <img onClick={toggleDrawer('right', true)} src={`https://picsum.photos/200/200`} alt={`Person - ${person.name}`} />
              <div className="film-details">
                <div className='f1'>{person.name}</div>
                <MoreVertIcon    />
                {/* <p>Birthdate: {person.birth_year}</p>
                <p>Species: {person.species.length > 0 ? person.species[0] : 'Unknown'}</p> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <ul className="film-list">
          {people.map((person) => (
            <li  className='people_list' key={person.url}>
              {/* <img src={`https://picsum.photos/100/100`} alt={`Person - ${person.name}`} /> */}
              {/* <div className="detail"> */}
                <div onClick={toggleDrawer('right', true)} className='f2'>{person.name}</div>
                <div className='f3'>Birthdate: {person.birth_year}</div>
                <div className='f4'>Species: {person.species.length > 0 ? person.species[0] : 'Unknown'}</div>
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

export default PeoplePage;
