import React from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// https://medium.com/better-programming/build-an-image-slider-with-react-es6-264368de68e4

const Modal = (props) => {

    function handleClick(e) {
        props.toggle(e);
    }

    function handlePrev(e) {
        props.prev(e)
    }

    return (
        <div id='overlay' class='overlay'>
            <div className='overlay-content'>
                <p className='close-modal' onClick={handleClick}>x</p>
                <button className='prev' onClick={handlePrev}>{<FaChevronLeft />}</button>
                <button className='next' onClick={props.next}>{<FaChevronRight />}</button>
                {console.log(props.activeIndex)}

                <h1>{props.slide.name}</h1>
                <p>{props.slide.description}</p>
            </div>
        </div>
    )
}

export default Modal;