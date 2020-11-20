import React from "react"
import launch from '../images/banner-launch.jpg';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Launch = () => (
    <div>
        <a href='https://arritmiatour.contilatam.com/'>
            <img src={launch} alt='Encuentro Nacional de Arritmias' />
        </a>
    </div>

)

export default Launch
