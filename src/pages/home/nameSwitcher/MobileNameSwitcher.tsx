import { useState, useEffect } from "react";

function MobileNameSwitcher() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const baseClasses =
    "bg-gradient-to-tr bg-clip-text h-14 mt-2 font-ubuntu py-2 text-transparent transition-opacity duration-1000";
  const textClasses =
    "from-orange-700 via-amber-800 to-amber-900 dark:from-pink-300 dark:via-purple-300 dark:to-violet-400";

  return (
    <>
      <p
        className={`${baseClasses} ${textClasses} ${showFirst ? "text-4xl opacity-100" : "absolute z-[-1] h-0 w-0 opacity-0"}`}
      >
        0xmmq
      </p>
      <p
        className={`${baseClasses} ${textClasses} ${showFirst ? "absolute z-[-1] h-0 w-0 opacity-0" : "text-3xl opacity-100"}`}
      >
        Wei Tzu Hsiang
      </p>
    </>
  );
}

export default MobileNameSwitcher;
