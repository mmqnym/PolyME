interface Props {
  logo: string;
  link: string;
}

function Web3Link({ logo, link }: Props) {
  return (
    <button type="button" className="group active:animate-ripple">
      <a href={link} target="_blank" rel="noopener">
        <img
          src={logo}
          className="h-6 w-6 transition-all duration-300 sm:relative sm:left-0 sm:h-6 sm:w-6 xl:group-hover:-left-0.5 xl:group-hover:h-8 xl:group-hover:w-8"
        />
      </a>
    </button>
  );
}

export default Web3Link;
