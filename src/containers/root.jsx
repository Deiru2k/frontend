import React from 'react';
import Navbar from 'components/navbar';

export default (props) => (
  <main>
    <Navbar />
    {props.children}
  </main>
);
