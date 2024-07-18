function BottomWave() {
  return (
    <div className="absolute bottom-0 left-0 h-6 w-full overflow-hidden">
      <div className="absolute bottom-0 h-full w-[200%] animate-wave">
        <svg className="float-left h-full w-1/2" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,100 L0,100 Z"
            className="fill-amber-900/15 transition-all duration-500 dark:fill-purple-300/15"
          ></path>
          <path
            d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,100 L0,100 Z"
            className="fill-amber-900/10 transition-all duration-500 dark:fill-purple-400/10"
          ></path>
          <path
            d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,100 L0,100 Z"
            className="fill-amber-900/5 transition-all duration-500 dark:fill-purple-400/5"
          ></path>
        </svg>
        <svg className="float-left h-full w-1/2" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,100 L0,100 Z"
            className="fill-amber-900/15 transition-all duration-500 dark:fill-purple-300/15"
          ></path>
          <path
            d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,100 L0,100 Z"
            className="fill-amber-900/10 transition-all duration-500 dark:fill-purple-400/10"
          ></path>
          <path
            d="M0,70 C200,100 400,40 600,70 C800,100 1000,40 1200,70 L1200,100 L0,100 Z"
            className="fill-amber-900/5 transition-all duration-500 dark:fill-purple-400/5"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default BottomWave;
