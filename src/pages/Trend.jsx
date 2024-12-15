import React, { useEffect, useState } from 'react';
import './trend.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import TrendCard from '../components/TrendCard';

function Trend() {
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5173/data/movieData.json');
            if (!response.ok) throw new Error('Failed to fetch data');
            const data = await response.json();
            setSlides(data);
        } catch (e) {
            console.error('Error fetching data:', e.message);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id="trend" className="trend">
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Coming soon</h4>
                </div>
                <div className="row">
                    <Swiper
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 20 },
                            480: { slidesPerView: 2, spaceBetween: 30 }, 
                            640: { slidesPerView: 4, spaceBetween: 30 },
                            992: { slidesPerView: 6, spaceBetween: 30 },
                        }}
                        spaceBetween={30}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        modules={[Autoplay]}
                        className="trendSwipper"
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide._id}>
                                <TrendCard slide={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Trend;