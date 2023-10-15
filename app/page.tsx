"use client";
import { useTheme } from "next-themes";

const Home = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <div className="space-x-2">
        <button onClick={() => setTheme("light")}>light</button>
        <button onClick={() => setTheme("dark")}>dark</button>
      </div>
      <p>
        NEXT JS APP DIRECTORY - TRPC - PRISMA ORM - TAILWIND CSS - SHADCN UI -
        NEXT AUTH - NEXT THEMES
      </p>
    </div>
  );
};

export default Home;
