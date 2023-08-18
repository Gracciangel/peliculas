import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useFetch } from '../helpers/useFetch';

const Cardfind =({img , title , overview ,like})=>{
    
    
    return (
        <div className='cardFind'>

            <div className='status'>
            <span>{title}</span>
                <div>   <span className='spanLike'>{like}</span>
                    <img className='like' src="../../assets/heart.png" alt="" />
                </div>
            </div>
            <img src={img} alt=""/>
            <p>{overview}</p>
        </div>
    )
}


export const NavBarCustom = () => {
    const [leyend , setLeyend] = useState(false)
    const [toggleSearch , setToggleSearch] = useState(false)
    const [findTitle, setFindTitle]=  useState(null)
    const [imgUrl ,b ,data]= useFetch(findTitle)
    const [movieFind , setMovieFind] = useState({
        img: null ,
        title: '',
        overview: '',
        like: ''

    })
    const changeSumbit=(e)=>{
        e.preventDefault()
        setFindTitle(e.target.value) ;
    }
    const search = (e) => {
        e.preventDefault();
        let foundMovie = null ;
        let currentPage = 1;
        
        
        while (!foundMovie && currentPage <= data.length ) {
            foundMovie = data.find((item) => item.title.toLowerCase().includes(findTitle));
         currentPage++;

        }

        if (foundMovie) {
            setToggleSearch(true);
            setLeyend(false)
            setMovieFind({
                img: `${imgUrl}${foundMovie.poster_path}`,
                title: foundMovie.title,
                overview: foundMovie.overview,
                like: foundMovie.vote_count
            });
        } else {
            setToggleSearch(false);
            setLeyend(true)
        }
    };

  return (
  <>
          <Navbar className="bg-body-tertiary">
              <Link
                  to={'/'}
              >
                  <Button>Home</Button>
              </Link>

              <Form inline='true'>
                  <Row>
                      <Col xs="auto">
                          <Form.Control
                              type="text"
                              placeholder="busca aqui...    "
                              className=" mr-sm-2"
                              onChange={changeSumbit}
                          />
                      </Col>
                      <Col xs="auto">
                          <Button type="submit"
                              onClick={search}
                              placeholder='busca una pelicula'
                          >Search</Button>
                      </Col>
                  </Row>
              </Form>

          </Navbar>
          {
            toggleSearch ? (
                <>
                      <Cardfind
                          img={movieFind.img}
                          title={movieFind.title}
                          overview={movieFind.overview}
                          like={movieFind.like}
                      />
                      <button 
                      className='btnFind'
                      onClick={() => setToggleSearch(false)}>ocultar</button>
                </>
            ) :
                  (
                      (leyend && findTitle) && <p
                          className='pfind'
                      >Ooopss... título no encontrado</p>   
                  )
          }
  </>
  )
}
