import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import styled from 'styled-components'

const StyledImg = styled(Img)`
  border-radius: 5px;
  width: 100%;
  height: 300px;
  @media screen and (max-width: 1000px) {
    height: auto;
  }
`

const PreviewCompatibleImage = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return <StyledImg fluid={image.childImageSharp.fluid} alt={alt} />
  }

  if (!!childImageSharp) {
    return <StyledImg fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string') {
    return <img style={{ borderRadius: '5px' }} src={image} alt={alt} />
  }

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
