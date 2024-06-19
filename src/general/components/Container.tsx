function Container({ children }: { children: React.ReactNode }) {
  return <div className="h-screen w-full bg-orange-50 dark:bg-black">{children}</div>;
}

export default Container;
