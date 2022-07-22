import React from "react";
import { useState, useEffect, useRef } from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselIndicators } from "./CarouselIndicators";

import "./BaseCarousel.css"
import { CarouselControls } from "./CarouselControls";

export const BaseCarousel = ({ width = 1000, slides, interval = 3000, controls = false, indicators = false, autoPlay = true }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slideInterval = useRef()

    const startSlideTimer = () => {
        if (autoPlay) {
            stopSlideTimer()
            
            slideInterval.current = setInterval(() => {
                setCurrentSlide(currentSlide => currentSlide < slides.length - 1 ? currentSlide + 1 : 0)
            }, interval)
        }
    }

    const stopSlideTimer = () => {
        if (autoPlay && slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    const prev = () => {
        startSlideTimer()
        const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1
        setCurrentSlide(index)
    }

    const next = () => {
        startSlideTimer()
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0
        setCurrentSlide(index)
    }

    const switchIndex = (index) => {
        startSlideTimer()
        setCurrentSlide(index)
    }

    useEffect(() => {
        startSlideTimer()

        return () => stopSlideTimer()
    }, [])

    return (
        <div className="carousel" style={{ maxWidth: width }}>
            <div className="carousel-inner" style={{ transform: `translateX(${-currentSlide * 100}%)`}}>
                {slides.map((slide, index) => (
                    <CarouselItem 
                        slide={slide}
                        key={index}
                        stopSlide={stopSlideTimer}
                        startSlide={startSlideTimer}
                    />
                ))}
            </div>
            {indicators && <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />}
            {controls && <CarouselControls prev={prev} next={next} />}
        </div>
    )
}