import React from 'react';
import { Wrapper, picStyle } from '../../helper';
import userPic from "../../assets/user.jpeg";

const User = () => {
  return (
    <Wrapper>
        <img src={userPic} style={picStyle} alt="celebrities_picture" />
    </Wrapper>
  )
}

export default User;