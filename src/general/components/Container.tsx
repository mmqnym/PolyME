function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col bg-orange-50 dark:bg-black">{children}</div>
  );
}

export default Container;
