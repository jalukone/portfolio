
type LinkAnchorProps = {
  page: string,
  selectedPage: string,
  setSelectedPage: Function
}


const LinkAnchor = ({ page, selectedPage, setSelectedPage }: LinkAnchorProps) => {

  const lowerCasePage = page.toLowerCase();
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-transparent" : "text-light"}
        font-semibold bg-gradient-greenblue bg-clip-text hover:text-pink-dark transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </a>
  )

};

export default LinkAnchor
