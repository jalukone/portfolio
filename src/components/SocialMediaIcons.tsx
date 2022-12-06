import Github from "../assets/github.svg"
import Linkedin from "../assets/linkedin.svg"
import Instagram from "../assets/instagram.svg"

const SocialMediaIcons = () => {

  const socialMedias = [
    { id: "github", path: Github, url: "https://github.com/jalukone" },
    { id: "github", path: Linkedin, url: "https://www.linkedin.com/in/gersonjeanpierre/" },
    { id: "github", path: Instagram, url: "https://www.instagram.com/jalukone/" },
  ]

  return (
    <div className="flex justify-center md:justify-start my-8 gap-7">

      {socialMedias.map(({ id, path, url }) =>
        <a
          className="hover:opacity-50 transition duration-500"
          href={url}
          target="_blank">
          <img
            className="h-[40px] invert "
            key={id}
            src={path}
          />
        </a>
      )}

    </div>
  )
}

export default SocialMediaIcons
