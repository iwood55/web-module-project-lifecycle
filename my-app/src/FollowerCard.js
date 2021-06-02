import React, { Component } from 'react';
import {FollowDiv, Paragraph} from './StyledComponents'; 

class FollowerCard extends Component {

render() {
    const { follower } = this.props;
    return (
    <FollowDiv>
        <img src={follower.avatar_url} alt="follower avatar" />
        <Paragraph>{follower.login}</Paragraph>
        <Paragraph>{follower.name}</Paragraph>
    </FollowDiv>
);}}

export default FollowerCard