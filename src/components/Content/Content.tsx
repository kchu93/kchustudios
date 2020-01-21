import React, { Component } from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { ContentContainer } from './styles';
import MoodBoard from '../MoodBoard/MoodBoard';
import { moodBoardImages } from '../../utils/constants/imageConstants';

interface ContentProps {
    path: any;
    menuOpen: boolean;
}

export class Content extends Component<ContentProps> {
    render() {
        const { menuOpen } = this.props;

        return (
            <ContentContainer menuOpen={menuOpen}>
                <Switch>
                    <Route path="/mood">
                        <MoodBoard menuOpen={menuOpen} images={moodBoardImages}/>
                    </Route>
                </Switch>
            </ContentContainer>
        );
    }
}

export default Content;
