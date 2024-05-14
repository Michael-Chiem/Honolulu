import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';

import API from '../utils/API';
import image from '../images/me.jpg'

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  
  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4" style={{ 
      backgroundImage: `url(${image})`}}>
      <h1>Welcome to my Portfolio</h1>
      <img></img>
    </div>
  );
}
