'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSSRId } from '@/utils/useSSRId';

export const ScrollEffect = (props) => {
  const offset = props.offset ?? 150;
  const duration = props.duration ? props.duration + 's' : '1s';
  const animateOut = props.animateOut ?? false;

  const id = props.id ?? useSSRId('scroll'); // SSR-safe ID
  const animElemRef = useRef(null);
  const [activeElem, setActiveElem] = useState(false);

  const scrollAction = () => {
    const animElem = animElemRef.current;
    if (!animElem) return;

    const windowHeight = window.innerHeight;
    const elementTop = animElem.getBoundingClientRect().top;

    if (elementTop < windowHeight - offset) {
      setActiveElem(true);
      animElem.classList.add('active');
    } else if (!animateOut) {
      // Optional: remove animation class
    }
  };

  useEffect(() => {
    animElemRef.current = document.getElementById(id);
    scrollAction();
    document.addEventListener('scroll', scrollAction);

    return () => {
      document.removeEventListener('scroll', scrollAction);
    };
  }, [id, offset, animateOut]);

  return (
    <div
      id={id}
      className={`${props.className ?? ''} scrollFade`}
      style={{ transition: duration }}
    >
      {!activeElem ? (
        <div className="h-screen flex items-center">
          <p className="mx-auto">Loading...</p>
        </div>
      ) : (
        <Suspense fallback={
          <div className="h-screen flex items-center">
            <p className="mx-auto">Loading...</p>
          </div>
        }>
          {props.children}
        </Suspense>
      )}
    </div>
  );
};
