import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';
import image from '../images/me.jpg';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'left', marginRight: '150px' }}> {/* Added marginRight to create space */}
        <h1>Welcome to my Portfolio</h1>
      </div>
      <div>
        <img src={image} alt="Me" style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }} />
      </div>
    </div>
  );
}
