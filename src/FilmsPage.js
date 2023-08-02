import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Filmspage.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';



const FilmsPage = () => {
  const [films, setFilms] = useState([]);
  const [isGridView, setIsGridView] = useState(true);


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
    
    const fetchFilms = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/films/');
        setFilms(response.data.results);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
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
      <div className='title'>Films</div>
      <button className='btu' onClick={toggleView}>{isGridView ? 'List' : 'Grid'}</button>
      </div>
      {isGridView ? (
        <div className="film-grid">
           
          {films.map((film) => {
            return (
              <div  className="film-item" key={film.url}>
                <img onClick={toggleDrawer('right', true)} src={`https://picsum.photos/200/300`} alt={`Film Poster - ${film.title}`} />
                <div className="film-details">
                  <div className='f1'>{film.title}</div>

                  <MoreVertIcon    />
                  
                  {/* <p>Release Date: {film.release_date}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <ul className="film-list">
          {films.map((film) => (
            <li className='kl' key={film.url}>
              {/* <div> */}
              <img src={`https://picsum.photos/100/150`} alt={`Film Poster - ${film.title}`} />
              {/* <div className="film-details"> */}
                <div onClick={toggleDrawer('right', true)} className='f2'>{film.title}</div>
                <div className='f3'>Release Date: {film.release_date}</div>
                <MoreVertIcon    />
              {/* </div> */}
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

export default FilmsPage;







