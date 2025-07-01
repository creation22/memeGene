import React from "react";
import { Cover } from "../component/ui/cover";

export function CoverDemo() {
  return (
    <div className="max-w-7xl mx-auto text-center mt-10 px-4">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Generate memes at <Cover>lightspeed</Cover>
      </h1>
      
      <h2 className="text-2xl mt-4">
        A one-stop website where you get all popular meme templates on one page
      </h2>
    </div>
  );
}
