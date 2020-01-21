import React, { FunctionComponent } from 'react'
import { DescriptionContainer, TextContainer } from './styles';
import { description } from './constants';

const Description: FunctionComponent = () => {
    return (
        <DescriptionContainer>
            <TextContainer>
                {description()}
            </TextContainer>
        </DescriptionContainer>
    )
};

export default Description;
