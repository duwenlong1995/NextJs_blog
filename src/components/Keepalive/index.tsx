import React, { useRef, useEffect, Suspense, createContext, ReactNode } from "react";

const Wrapper = ({ children, active }: any) => {
  const resolveRef = useRef();

  if (active) {
    resolveRef.current && resolveRef.current();
    resolveRef.current = null;
  } else {
    throw new Promise(resolve => {
      resolveRef.current = resolve;
    });
  }

  return children;
};

const OffscreenKeepAlive = ({ children, active }: any) => {
  return (
    <Suspense>
      <Wrapper active={active}>{children}</Wrapper>
    </Suspense>
  );
};
export default OffscreenKeepAlive;
