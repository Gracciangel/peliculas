import {useEffect, useState} from 'react'



import { CustomSwiper } from './CustomSwiper';
import { NavBarCustom } from './NavBarCustom';
import { Pages } from './Pages';
import {useFetch} from '../helpers/useFetch'
import 'bootstrap/dist/css/bootstrap.min.css';






export const Index = () => {
  const [likesMap, setLikesMap] = useState(new Map());
  const [overView , setOverview] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null);
  const[imgUrl ,page , data, next, prev]= useFetch()
  console.log(data)
  const handleLike = (itemId) => {
    setLikesMap(prevLikesMap => {
      const newLikesMap = new Map(prevLikesMap);
      const currentLikes = newLikesMap.get(itemId) || 0;
      newLikesMap.set(itemId, currentLikes + 1);
      return newLikesMap;
    });
  };

return (
   <>
    <NavBarCustom 
      
    />
    <h1 className='tendencia'>TOP 10</h1>
    <CustomSwiper/>
    <div className="container">

      {
        data.map(item =>
        
          <div className="cards"
            key={item.id}
          >
            
            <img src={`${imgUrl}${item.poster_path}`} alt="" />
            {overView && swal({
              title: selectedItem && selectedItem.title ,
              text: selectedItem.overview,
              imageUrl : imgUrl+selectedItem.poster_path,
              confirmButtonText: 'Ocultar',
              confirmButtonColor: "#03a9f4",
         
            })}
<div className="containerInfo">
              <button
                onClick={() => {
                  setOverview(!overView)
                  setSelectedItem(item)
                }}

              >VER</button>
          <div className="voteCountInfo">
                <img
                  src="../../assets/me-gusta.png"

                  onClick={() => handleLike(item.id)}/>
                <span className='vote_count'>{item.vote_count + (likesMap.get(item.id) || 0)}</span>
          </div>
</div>
          </div>
        )
        
      }


    </div>
      <Pages
        page={page}
        next={next}
        prev={prev}

      />
   </>
  )

}
