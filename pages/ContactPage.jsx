import React from 'react';
import { useState, useEffect } from 'react'; // Importing useState and useEffect from 'react'
import { Link } from 'react-router-dom'; // Importing Link from 'react-router-dom' for linking between pages
import Profile from '../components/UI/ProfileSections/ProfileTeaser'; // Importing Profile component
import ListItem from '../components/UI/ListItem'; // Importing ListItem component
import API from '../utils/API'; // Importing API utilities

// Defining ContactPage functional component
export default function ContactPage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  
  // Return statement with JSX content
  return (
    <div className="container pt-4">
      <h1>Contact Me Through this Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="request">Your Request:</label>
          <textarea className="form-control" id="request" rows="5"></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      
      <div className="mt-4">
        <h3>Contact Information:</h3>
        <p>Email: <a href="mailto:michaelchiem@hotmail.com">michaelchiem@hotmail.com</a></p>
        <p>Github: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
        <p>Website: <a href="https://yourwebsite.com">yourwebsite.com</a></p>
      </div>
    </div>
  );
}
