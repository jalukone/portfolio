
type LinkAnchorProps = {
  page: string,
  selectedPage: string,
  setSelectedPage: Function
}


const LinkAnchor = ({ page, selectedPage, setSelectedPage }: LinkAnchorProps) => {

  const lowerCasePage = page.toLowerCase();
  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-pink-dark" : "text-light"}
          hover:text-pink-dark transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </a>
  )

};

export default LinkAnchor
