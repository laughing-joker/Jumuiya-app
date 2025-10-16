import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/Mt.Theresea wa calcuta .jpg"
            alt="Mt.Theresia wa Calcutta"
            fill
            className=""
          />
          <div>
            <h1 className="text-xl font-playfair font-bold text-foreground">
              Jumuiya ya Wakatoliki
            </h1>
            <p className="text-xs text-muted-foreground">
              Mtakatifu Theresia wa Calcutta
            </p>
          </div>
        </div>
        <Button variant="outline">Sign Out</Button>
      </div>
    </header>
  );
};

export default Header;
