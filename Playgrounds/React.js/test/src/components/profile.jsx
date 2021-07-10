import React from 'react';
import ReactTooltip from 'react-tooltip';

const Profile = (props) => (
  <>
    <ReactTooltip place='right' type='dark' effect='solid' />
    <h1 data-tip='hello world~!'>Profile</h1>
    <button data-tip='hello world'>Go to Home</button>
  </>
);

export default Profile;
