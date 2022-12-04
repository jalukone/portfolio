type BurgerProps = {
  onClick: () => void;
}

const Burger = ({ onClick }: BurgerProps) => {
  return (
    <div onClick={onClick} role="button" className="flex flex-col justify-around h-6">
      <div className="w-6 h-1 bg-pink-dark rounded-xl"></div>
      <div className="w-6 h-1 bg-pink-dark rounded-xl"></div>
      <div className="w-6 h-1 bg-pink-dark rounded-xl"></div>
    </div>
  )
}

export default Burger
