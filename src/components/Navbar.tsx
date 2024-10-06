

const Navbar = () => {
  return (
    <div className='w-full navbar z-10 flex flex-row justify-center gap-12 p-4 bg-stone-800 font-header font-bold text-lg fixed'>
      {/* <div>
      Mapping Chinatowns
      </div> */}
      <a href="#home">Home</a>
      <a href="#timeline">Timeline</a>
      <a href="#limehouse">Limehouse</a>
      <a href="#demonization">Yellow Peril</a>
      {/* <Link to ='/'>Home</Link>
      <Link to ='/limehouse'>Limehouse</Link>
      <Link to ='/limehouse'>Soho</Link> */}
    </div>
  )
}

export default Navbar