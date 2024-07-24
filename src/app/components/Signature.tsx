"use client"
import { useEffect } from 'react';

const Signature = () => {
  useEffect(() => {
    const comment = document.createComment('Site développé par Anthony Pham (WIB) - dev.anthonypham@gmail.com');
    document.body.appendChild(comment);
  }, []);

  return null;
};

export default Signature;
