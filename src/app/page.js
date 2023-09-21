import Image from 'next/image'
import twisha from '../../public/images/twisha.png'
import Work from '@/components/Work/Work';
import Hobby from '@/components/Hobby/Hobby';
import Footer from '@/components/Footer/Footer';
export default function Home() {
  return (
    <main className="font-epilogue">
      <div>
        <div className="bg-landing bg-no-repeat bg-[length:100%] w-full max-h-screen aspect-[16/9]">
          <div className="flex max-w-[1280px] mx-auto justify-between h-full">
            <div className="flex flex-col justify-center gap-5 max-w-[666px] m-28">
              <p className="text-3xl font-semibold">Hi, I am Twisha Patel</p>
              <p className="font-semibold text-7xl">User Experience Designer</p>
              <p className="text-xl font-medium">
                Crafting delightful, human centred and inclusive experiences.
              </p>
            </div>
            
            {/* <div>
          <Image
            src={twisha}
            alt="twisha-photo"
            className='w-[400px]'
          />
        </div> */}
          </div>
        </div>
        <div className="h-[350px] bg-ux bg-no-repeat bg-[length:100%] w-full aspect-[16/9]">
          <div className="flex flex-col justify-center gap-4 items-center relative top-1/2 -translate-y-1/2 max-w-[1024px] mx-auto text-center">
            <p className="text-[#FEFEFE] text-2xl">
              Design is really an act of communication, which means having a
              deep understanding of the person with whom the designer is
              communicating.
            </p>
            <p className="text-[#FEFEFE] text-lg">
              ― Donald A. Norman, The Design of Everyday Things
            </p>
          </div>
        </div>
      </div>
      <Work />
      <Hobby />
      <Footer />
    </main>
  );
}
