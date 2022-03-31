import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar one" />
          </div>
          <h5 className='client__name'>Maral Kosari</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolorem ad voluptas similique! Saepe illo recusandae voluptas, ut quae provident sequi vel, unde eligendi veniam, pariatur nobis quidem laborum exercitationem.</small>

        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar two" />
          </div>
          <h5 className='client__name'>Amirreza Kamkar</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolorem ad voluptas similique! Saepe illo recusandae voluptas, ut quae provident sequi vel, unde eligendi veniam, pariatur nobis quidem laborum exercitationem.</small>

        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar three" />
            
          </div>
          <h5 className='client__name'>Mahdi Zamani</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolorem ad voluptas similique! Saepe illo recusandae voluptas, ut quae provident sequi vel, unde eligendi veniam, pariatur nobis quidem laborum exercitationem.</small>

        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar four" />
            
          </div>
          <h5 className='client__name'>Sara Saei</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolorem ad voluptas similique! Saepe illo recusandae voluptas, ut quae provident sequi vel, unde eligendi veniam, pariatur nobis quidem laborum exercitationem.</small>
     
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonial