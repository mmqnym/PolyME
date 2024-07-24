import { useState, useEffect } from "react";

function NameSwitcher() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const baseClasses =
    "bg-gradient-to-tr bg-clip-text font-ubuntu py-2 text-4xl text-transparent transition-opacity duration-1000 xl:text-6xl";
  const textClasses =
    "from-orange-700 via-amber-800 to-amber-900 dark:from-pink-300 dark:via-purple-300 dark:to-violet-400";

  return (
    <>
      <p className={`${baseClasses} ${textClasses} ${showFirst ? "opacity-100" : "absolute z-[-1] h-0 w-0 opacity-0"}`}>
        0xmmq
      </p>
      <p className={`${baseClasses} ${textClasses} ${showFirst ? "absolute z-[-1] h-0 w-0 opacity-0" : "opacity-100"}`}>
        Wei Tzu Hsiang
      </p>
    </>
  );
}

export default NameSwitcher;
