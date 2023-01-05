import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10 font-dmmono">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-semibold text-2xl text-light">
            Gerson Jean Pierre
          </p>
          <p className="text-md text-light">
            © 2022 JalukOne. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;