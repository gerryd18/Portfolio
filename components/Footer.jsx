import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 hover:text-white dark:hover:text-primary transition-all duration-200 text-[20px]"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Gerry Dermawan. all rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
