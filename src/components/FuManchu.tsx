


const FuManchu = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className='text-4xl font-bold'>Yellow Peril: The Demonization of Chinatown</h1>
        <div className="flex flex-col gap-4 font-content italic bg-stone-800 p-8 tracking-wide rounded-md">
          <p className="text-2xl">"Imagine a person, tall, lean, and feline, high-shouldered, with a 
            brow like Shakespeare and a face like Satan, a close-shaven skull, 
            and long, magnetic eyes of the true cat-green: invest him with all 
            the <b className="text-yellow-300">cruel cunning of an entire Eastern race</b>, accumulated in one 
            giant intellect, with all the resources of science past and present... 
            <span className="text-2xl"> Imagine that awful being and you have a mental picture of Dr Fu Manchu, 
            the <b className="text-yellow-300">yellow peril incarnate</b> in one man."
            </span>
          </p>
          <p className="text-right pr-12 pt-6 text-xl">- Sax Rohmer (The Insidious Dr. Fu-Manchu)</p>
        </div>
        <div className="flex flex-row w-full justify-evenly mx-auto h-72 align-bottom">
          <div className="h-full w-1/4">
            <img className="book-cover-img mx-auto"
              src="https://cdn-v2.theculturetrip.com/610x909/wp-content/uploads/2018/07/14505137028_7a106b068e_o.webp" alt="" />
          </div>
          <div className="h-full w-1/4">
            <img className="book-cover-img mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/The_Mystery_of_Dr._Fu-Manchu_cover_1913.jpg" alt="" />
          </div>
          <div className="h-full w-1/4">
            <img className="book-cover-img mx-auto"
              src="https://dover-books-us.imgix.net/covers/9780486157542.jpg?auto=format&w=300" alt="" />
          </div>
          <div className="h-full w-1/4">
            <img className="book-cover-img mx-auto"
              src="https://www.londonfictions.com/uploads/3/5/0/5/3505647/published/burke-1916-limehouse-nights-1923-richards-7-nevinson.jpg?1596815667" alt="" />
          </div>
        </div>
        <p className="img-caption mt-[-24px] pr-16">
          Works of fiction by Sax Rohmer and Thomas Burke in the early 20th century
        </p>
        <div className="text-lg">
          The term "yellow peril" refers to a fear and hostility towards East Asians, 
          particularly Chinese people, that emerged in the late 19th-century in Western culture.
          Popular media escalated the rhetoric of "yellow peril" through the creation of
          characters like Dr. Fu Manchu, a fictional Chinese villain 
        </div>
    </div>
  )
}

export default FuManchu