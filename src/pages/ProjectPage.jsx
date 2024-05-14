import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileSections/ProfileTeaser';
import ListItem from '../components/UI/ListItem';
import image1 from '../images/me.jpg'




//import API from '../utils/API';

export default function HomePage() {
  // Prior to the return statement, our homepage uses a few react hooks and fetchData function to query to a mock database and retrieve random user data
  
  const initialProjects= [
    {
      id: 1,
      projectName: "Project One",
      description: "This project uses Html and CSS",
      github: "https://www.github.com",
      deployedLink: "https://www.google.com",
      backgroundImage: image1
    },
    {
      id: 2,
      projectName: "Project Two",
      description: "This project uses Js",
      github: "https://www.github.com",
      deployedLink: "https://www.google.com",
      // backgroundImage: image1
    },
    {
      id: 3,
      projectName: "Project Three",
      description: "This project uses Node",
      github: "https://www.github.com",
      deployedLink: "https://www.google.com",
      // backgroundImage: image1
    },
  ]
  
  
  const [projects, setProjects] = useState(initialProjects);

  

  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((p) => (
          <ListItem key={p.id}>
            <Profile p={p} />
            {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
            
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
