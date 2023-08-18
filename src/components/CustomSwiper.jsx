
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';


export const CustomSwiper = () => {
    
    const [data ,setData] = useState([])
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=aaf8812b1d1a70feeec14d75ddd78b5f&language=es-MX&page=${10}`
    const someFecth = async()=>{
        try {
            const res = await fetch(url)
            const resJson = await res.json()
            setData(resJson.results)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        someFecth()
    },[])
    
  
  return (
      <>
        <div className="container">
              <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                      delay: 4500,
                      disableOnInteraction: false,
                  }}
                  pagination={{
                      clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
              >
                  {
                      data.map(item =>
                          <SwiperSlide
                              key={item.id}
                          >
                              <div
                                  style={{
                                      display: 'flex',
                                      flexWrap: 'wrap',
                                      gap: '1rem'
                                  }}
                              >
                                    <span>{item.title[0]}</span>
                                  <h3 className='titleSwiper'>{item.title}</h3>
                                  <img className='img' src={`${imgUrl}${item.poster_path}`} alt=""
                                      
                                  />
                                 
                              </div>
                          </SwiperSlide>
                      )
                  }

              </Swiper>
        </div>
      </>
  )
}
