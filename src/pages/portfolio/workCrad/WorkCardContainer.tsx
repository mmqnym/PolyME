function WorkCardContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-4/5 w-4/5 cursor-default grid-cols-6 grid-rows-12 gap-6 transition-colors duration-500">
      {children}
    </div>
  );
}

export default WorkCardContainer;
