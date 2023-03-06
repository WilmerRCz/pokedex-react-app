import pokeBall from "../assets/Poké_Ball_icon.svg";

function PokeNotFound() {
  return (
    <div className="text-white absolute inset-0 flex flex-row justify-center items-center">
    <div className="grid grid-cols-2 text-center">
      <img src={pokeBall} alt="pokeball" className="h-40 w-40 col-span-1" />
      <h1 className="text-7xl col-span-1 flex justify-center items-center">404!</h1>
        <p className="col-span-2 text-2xl ">¡Ha ocurrido un error!</p>
    </div>

    
  </div>
  )
}

export default PokeNotFound