import React, { Component } from 'react';
import { ImageContainer, StyledImage } from './styles';

interface ImageProps {
  imageUrl: string;
}

export class Image extends Component<ImageProps> {
  render() {
    return (
        <ImageContainer>
            <StyledImage src={this.props.imageUrl}></StyledImage>
        </ImageContainer>
    );
  }
}

export default Image;
