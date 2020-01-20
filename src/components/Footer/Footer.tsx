import React, { Component } from 'react';

import { FooterContainer, IconContainer, Icon } from './styles';

import { instagramUrl, twitterUrl } from '../../utils/constants/imageConstants';
import { instagramIcon, twitterIcon } from '../../utils/icons';

export class Footer extends Component {
  render() {
    return (
        <FooterContainer>
            <IconContainer>
                <Icon href={instagramUrl} target="_blank">{instagramIcon}</Icon>
                <Icon href={twitterUrl} target="_blank">{twitterIcon}</Icon>
            </IconContainer>
        </FooterContainer>
    );
  }
}

export default Footer;
