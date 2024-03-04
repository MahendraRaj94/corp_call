"use client";

import { useRef, useState } from "react";
import { useRouter } from "react-router-dom";

function Meeting() {
  // const router = useRouter();
  const localStream = useRef();
  const remoteStream = useRef();
  return (
    <div className="container flex px-4 content-center">
      <video className="bg-white mx-4" autoPlay ref={localStream} />
      <video className="bg-white mx-4" autoPlay ref={remoteStream} />
    </div>
  );
}

export default Meeting;
