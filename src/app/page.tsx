import './styles/style.css'
import { Navbar } from '../components/Navbar';
import { Gallery } from '../components/Gallery';
import { MainFooter } from '../components/Bottom';
// import { Vid_Gallery } from '@/components/Video_Gallery';

export default function Home() {

  return (
    <div className="container max-w-full bg-black bg-opacity-40 backdrop-blur-[8px]">
      <Navbar />
      <div className='container mx-auto h-24'></div>
      <div className="md:grid md:grid-cols-2 place-items-center md:gap-4">
        <div className="container mx-auto px-12 py-6 text-center">
          <h1 className="md:text-9xl text-7xl font-style-dosis text-white">Gallery</h1>
          <div className="container mx-auto py-8 text-center">
            <p className="md:text-lg text-md font-style-serif text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio placeat, tempore ex architecto et voluptatibus modi quia sunt recusandae amet dolore quo sequi beatae voluptatem odit explicabo iusto! Neque earum quod iste odio veniam ullam necessitatibus nesciunt magni. Id eaque nemo neque explicabo impedit ut nihil perspiciatis nostrum dolores.</p>
          </div>
        </div>
        <div className="container mx-auto px-12 py-6">
          <div className="header-imagebox-1"><img src="https://www.collegetips.in/images/header-image-1.jpg" className="header-image" /></div>
          <div className="header-imagebox-2"><img src="https://www.collegetips.in/images/header-image-2.jpg" className="header-image" /></div>
          <div className="header-imagebox-3"><img src="https://www.collegetips.in/images/header-image-3.jpg" className="header-image" /></div>
        </div>
      </div>
      <section className="container mx-auto/">
        <Gallery />
        {/* <Vid_Gallery /> */}
      </section>
      <MainFooter />
    </div>
  );
}
