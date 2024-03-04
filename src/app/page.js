"use client";

import Lobby from "./pages/lobby";
import Meeting from "./pages/meeting";

function Home() {
  return (
    <main className="flex min-h-screen text-center justify-around p-24">
      <Lobby></Lobby>
    </main>
  );
}

export default Home;
