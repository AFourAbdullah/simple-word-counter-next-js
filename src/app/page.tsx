"use client";
import { useState } from "react";

export default function Home() {
  const [Characters, setCharacters] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-800">
      <h1 className="text-5xl text-white">Word Counter App</h1>

      <textarea
        className="p-5"
        name=""
        id=""
        cols={60}
        rows={10}
        placeholder="Enter Your Text"
        onChange={(e) => setCharacters(e.target.value)}
      ></textarea>
      <h3 className="text-white text-2xl">
        Total Characters are:{" "}
        <span className="text-white text-center text-2xl">
          {Characters !== "" && Characters.length}
        </span>
      </h3>
      <h3 className="text-white text-2xl">
        Total Words are:{" "}
        <span className="text-white text-center text-2xl">
          {Characters !== "" && Characters.split(" ").length}
        </span>
      </h3>
    </main>
  );
}
