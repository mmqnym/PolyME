function BottomWave() {
  return (
    <div className="absolute bottom-0 left-0 h-5 w-full overflow-hidden">
      <svg className="absolute bottom-0 h-full w-[200%]" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path
          d="M0,0 C150,60 350,-10 500,20 C650,50 900,-20 1000,30 L1000,100 L0,100 Z"
          className="animate-wave fill-amber-900/15 transition-all duration-500 dark:fill-purple-300/15"
        ></path>
        <path
          d="M0,30 C150,80 350,10 500,40 C650,70 850,0 1000,50 L1000,100 L0,100 Z"
          className="animate-wave-slow fill-amber-900/10 transition-all duration-500 dark:fill-purple-400/10"
        ></path>
        <path
          d="M0,50 C150,90 350,30 500,60 C650,90 850,20 1000,70 L1000,100 L0,100 Z"
          className="animate-wave-slower fill-amber-900/5 transition-all duration-500 dark:fill-purple-400/5"
        ></path>
      </svg>
    </div>
  );
}

export default BottomWave;
