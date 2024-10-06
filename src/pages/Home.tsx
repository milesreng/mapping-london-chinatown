import FuManchu from "../components/FuManchu"
import Timeline from "../components/Timeline"
import Limehouse from "../components/Limehouse"
import Soho from "../components/Soho"
import Migration from "../components/Migration"

import LondonMap from '../../public/chinatowns_map.png'

const Home = () => {
  return (
    <div className='w-full h-full flex flex-col gap-8'>
      <div className='paragraph-section py-8 mx-auto gap-4 flex flex-col' id='home'>
        <div className="h-fit pb-8">
          <img
            className='h-full w-full object-cover' 
            src={LondonMap} alt="" />
          <p className="img-caption">Map of London in 1885 outlining locations of Limehouse and Gerrard Street Chinatowns ()</p>
        </div>
        <h1 className='font-bold text-4xl'>London Chinatown: From Limehouse to Soho</h1>
        <p>
          Intro text blah blah blah what is our thesis? Not sure yet. But we will figure it out.
          Random text for 3-5 sentences as a placeholder.
          Random text for 3-5 sentences as a placeholder.
          Random text for 3-5 sentences as a placeholder.
        </p>
      </div>
      <div className="paragraph-section  bg-stone-700 rounded-md mb-24" id='timeline'>
        <Timeline />
      </div>
      <div className="h-[50vh] pb-8 w-3/4 mx-auto">
        <img
          className='h-full w-full object-cover' 
          src="https://flashbak.com/wp-content/uploads/2016/04/GettyImages-3287449-1280x948.jpg" alt="" />
        <p className="img-caption">April 1911: A street in China Town in London’s East End. (Photo by Topical Press Agency/Getty Images)</p>
      </div>
      <div className='paragraph-section' id='limehouse'>
        <Limehouse />
      </div>
      <div className='paragraph-section' id='demonization'>
        <FuManchu />
      </div>
      <div className='paragraph-section' id='soho'>
        <Soho />
      </div>
      <div className='paragraph-section' id='migration'>
        <Migration />
      </div>
    </div>
  )
}

export default Home