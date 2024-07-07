function Container({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen w-full flex-col bg-orange-50 dark:bg-black">{children}</div>;
}

export default Container;
