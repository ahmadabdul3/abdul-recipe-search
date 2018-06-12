import React from 'react';


// - dumb component for now
// - this doesnt actually navigate right now because
//   theres only 1 route
export default function() {
  return (
    <nav className='app-navigation'>
      <NavItem title='Recipe finder' />
      <NavItem title='Home' />
    </nav>
  );
}


function NavItem({ title }) {
  return (
    <div className='nav-item'>
      { title }
    </div>
  );
}
