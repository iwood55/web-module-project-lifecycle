import React from "react";
import {UserDiv, InfoDiv} from './StyledComponents.js'

class Card extends React.Component {
componentDidMount() {
    console.log("card component mounted");
}

render() {
    const { users } = this.props;
    console.log(users);
    return (
<UserDiv>
    <div className="image-container">
    <img alt="user avatar" src={users.avatar_url} height='100%' />
    </div>
    <InfoDiv className="user-info">
        <h3>{users.name}</h3>
        <p>Login: {users.login}</p>
        <p>Followers: {users.followers}</p>
        <p>Following: {users.following}</p>
</InfoDiv>
</UserDiv>
);}}

export default Card;