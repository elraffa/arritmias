import React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata"
import Modal from '../utils/modal'


const ModalContent = (props) => {

    return (
        <div style={{
            heigth: '100%',
            width: `${props => props.width}px`,
            display: 'flex',
            transform: `translateX(-${props => props.translate}px)`,
            transition: `transform ease-out ${props => props.transition}s`
        }}>
            {props.slides.map((slide, index) => {
                return (<Modal key={index} slide={slide} toggle={props.toggle} transition={props.transition} translate={props.translate} width={props.width} activeIndex={props.activeIndex} prev={props.prev} next={props.next} />)
            })}
        </div>
    )
}

export default ModalContent;