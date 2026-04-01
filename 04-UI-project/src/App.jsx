import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
     { 
       img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
       intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas corporis sed laudantium? Alias, repellat voluptatum.',
       tag:'Satisfied'
     },
      { 
       img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
       intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas corporis sed laudantium? Alias, repellat voluptatum.',
       tag:'Underserved'
     },
      { 
       img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
       intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas corporis sed laudantium? Alias, repellat voluptatum.',
       tag:'Underbanked'
     },
     { 
       img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
       intro:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas corporis sed laudantium? Alias, repellat voluptatum.',
       tag:'Undergraduate'
     }
     ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
