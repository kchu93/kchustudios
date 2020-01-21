import React, { Component } from 'react';

import Image from '../Image/Image';
import {
    breakPointColumns,
    MoodBoardContainer,
    StyledMasonry,
} from './styles';
import Description from './Description/Description';

interface MoodBoardProps {
    images: string[];
    menuOpen: boolean;
}

export class MoodBoard extends Component<MoodBoardProps> {
    render() {
        return (
            <MoodBoardContainer menuOpen={this.props.menuOpen}>
                <Description />
                <StyledMasonry
                    breakpointCols={breakPointColumns}
                    className="masonryGrid"
                    columnClassName="masonryColumn"
                >
                    {this.props.images.map((image, index) => {
                        return (
                            <Image
                                key={index}
                                imageUrl={image}
                            />
                        )
                    })}
                </StyledMasonry>
            </MoodBoardContainer>
        );
    }
}

export default MoodBoard;
