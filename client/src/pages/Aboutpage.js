
import React from 'react';
import Akash from './Akash.png';
import Yogesh from './Yogesh.jpg';
import prasad from './Prasad.jpeg';
import Layout from '../components/Layout/Layout';


const creatorsData = [
  {
    id: 1,
    name: 'Yogesh S Patil',
    email: 'yogeshpatil892000@gmail.com',
    PRN: '230940520108',
    imageUrl: Yogesh, // Add the URL of the image
  },
  {
    id: 2,
    name: 'Prasad Hodgar',
    email: 'prasad@gmail.com',
    PRN: '230940320077',
    imageUrl: prasad, // Add the URL of the image
  },
  {
    id: 3,
    name: 'Akash Tomar',
    email: 'akash@gmail.com',
    PRN: '2309403001',
    imageUrl: Akash, // Add the URL of the image
  },
];

const CreatorCard = ({ id, name, email, PRN, imageUrl }) => (
  <div className="creator-card" key={id}>
    <img src={imageUrl} alt={name} className="creator-image" />
    <h2>{name}</h2>
    <p>Email:{email}</p>
    <p>PRN:{PRN}</p>
  </div>
);



const AboutPage =() =>{
  return (
    <Layout>
    <div className="about-page">
    <h1 id="team"> Team Members</h1>
    <div className="creators-container">
      {creatorsData.map(creator => (
        <CreatorCard key={creator.id} {...creator} />
      ))}
    </div>
  </div>
  </Layout>
  );
}

export default AboutPage;
