import React, { Component } from 'react';
import { MoodBoardContainer, ImageGrid } from './styles';

import Image from '../Image/Image';

interface MoodBoardProps {
  images: string[];
}

export class MoodBoard extends Component<MoodBoardProps> {
  render() {
    return (
      <MoodBoardContainer>
        <ImageGrid>
            {this.props.images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    imageUrl={image}
                  />
                )
            })}
        </ImageGrid>
      </MoodBoardContainer>
    );
  }
}

export default MoodBoard;
