interface Props {
  Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
}

function Web3Link({ Logo, link }: Props) {
  return (
    <button type="button" className="group active:animate-ripple">
      <a href={link} target="_blank" rel="noopener">
        <Logo className="relative left-0 h-6 w-6 transition-all duration-300 xl:group-hover:-left-0.5 xl:group-hover:h-8 xl:group-hover:w-8" />
      </a>
    </button>
  );
}

export default Web3Link;
