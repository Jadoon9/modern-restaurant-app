import React from 'react';
import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: 'rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt='spoon-img' className='spoon__image' />
  </div>
);

export default SubHeading;
