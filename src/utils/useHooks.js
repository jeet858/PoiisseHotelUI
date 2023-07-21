import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
 
export function useWindowResizeListener() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  function onResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return {
    width,
    height
  }
}

export function withRouter( Child ) {
    return ( props ) => {
        const location = useLocation();
        const navigate = useNavigate();
        return <Child { ...props } navigate={ navigate } location={ location } />;
    }
}

/**
 * Usage
 */

/* 
import React from 'react';
import useWindowResizeListener from './useWindowResizeListener';
 
const WindowSize = () => {
  const {
    width,
    height
  } = useWindowResizeListener();
  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
    </div>
  )
}
 
export default WindowSize; */