function WorkCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-2/3 w-2/3 cursor-default grid-cols-6 grid-rows-10 gap-6 transition-colors duration-500">
      {children}
    </div>
  );
}

export default WorkCardContainer;
