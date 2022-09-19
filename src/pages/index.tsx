import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  const [sliderImages, setSliderImages] = useState([
    'https://api.lorem.space/image/face?w=700&h=525',
    'https://api.lorem.space/image/face?w=700&h=526',
    'https://api.lorem.space/image/face?w=700&h=527',
  ]);

  const shiftRight = (arr: string | any[]) => {
    const newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (index === 0) {
        newArr[0] = arr[arr.length - 1];
      } else {
        newArr[index] = arr[index - 1];
      }
    }
    return newArr;
  };

  const shiftLeft = (arr: string | any[]) => {
    const newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (index === arr.length - 1) {
        // eslint-disable-next-line prefer-destructuring
        newArr[index] = arr[0];
      } else {
        newArr[index] = arr[index + 1];
      }
    }
    return newArr;
  };

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className=" bg-[url('https://api.lorem.space/image/face?w=1400&h=900')]">
        <div className="grid grid-cols-1 self-center sm:grid-cols-3 sm:py-5 sm:px-12">
          <div className="mx-auto mt-5 sm:mx-0">
            <Image
              className="mb-2 w-32"
              src={`${router.basePath}/assets/images/logo-white.png`}
              alt="logo"
              width={128}
              height={32}
            />
          </div>

          <ul className="flex cursor-pointer list-none flex-row items-center justify-around text-white ">
            {[
              { title: 'Home', href: '/Home' },
              { title: 'AboutUs', href: '/AboutUs' },
              { title: 'Get Involved', href: '/GetInvolved' },
              { title: 'Blog', href: '/Blog' },
              { title: 'Contact Us', href: '/ContactUs' },
            ].map(({ title, href }) => (
              <Link key={title} href={href} className="text-white">
                <li className="hover:text-orange-600"> {title} </li>
              </Link>
            ))}
          </ul>

          <div className="mt-5 flex flex-row justify-center self-center sm:mt-0 sm:justify-end">
            <button className="mx-2 bg-orange-600  px-8 ">
              <span className=" text-sm font-bold text-white">Donate</span>
            </button>
          </div>
        </div>
        <div className="text-center  text-xl font-bold text-white sm:mx-56 sm:text-6xl">
          <div className="pt-20 text-base sm:pt-56">Limitless</div>
          Enabling emerging adults to adapt and succeed.
        </div>
        <div className=" flex flex-row justify-center pt-6 sm:pb-10">
          <button className=" mx-2   bg-white px-8 ">
            <span className=" text-sm font-bold text-orange-600">
              Get Involved
            </span>
          </button>
          <span> </span>
          <button className="mx-2 bg-orange-600  px-8 ">
            <span className=" text-sm font-bold text-white">Donate</span>
          </button>
        </div>
      </div>

      <div className="my-20 grid grid-cols-1 sm:grid-cols-2">
        <div className="  p-10">
          <div>
            <div className="mb-4 ">
              <span className="text-xl font-bold sm:text-6xl ">About </span>
              <span className="text-xl font-bold text-orange-600 sm:text-6xl">
                Limitless
              </span>
            </div>

            <div>
              Convallis est lorem lorem vel consectetur. Mauris leo fermentum,
              tellus sollicitudin viverra feugiat risus blandit laoreet. Auctor
              lacinia turpis ultrices tempus. Ornare ullamcorper vivamus tellus
              leo elementum montes, quis imperdiet. Eget elit elementum gravida
              facilisi ac commodo elementum commodo. Tellus neque sagittis
              porttitor luctus pretium quam. Ultrices diam hendrerit pulvinar
              sit magna eget adipiscing eget etiam. Sed rhoncus vivamus urna
              mauris. Velit malesuada viverra amet duis nunc eget turpis.
            </div>
            <button className="my-8 bg-orange-600 py-1  px-8  text-white">
              <span className=" text-sm font-bold">Get Involved</span>
            </button>
          </div>
        </div>
        <div>
          <Image
            src="https://api.lorem.space/image/face?w=700&h=800"
            width={700}
            height={800}
            alt="Get Involved"
          />
        </div>
      </div>

      <div className="my-10 flex flex-col items-center sm:my-16">
        <div className="mb-2 text-6xl font-bold">
          Our <span className="border-b-8 border-b-orange-500">Programs</span>
        </div>
        <div className="text-center  text-sm sm:w-96">
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.
        </div>
      </div>

      <div className="my-8 grid grid-cols-1 sm:my-20 sm:grid-cols-2">
        {[
          {
            title: 'Program Name',
            desc: `Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
              quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
              interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
              aliquet urna quis.`,
            img: 'https://api.lorem.space/image/face?w=200&h=200',
          },
          {
            title: 'Program Name',
            desc: `Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
              quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
              interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
              aliquet urna quis.`,
            img: 'https://api.lorem.space/image/face?w=200&h=200',
          },
          {
            title: 'Program Name',
            desc: `Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
              quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
              interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
              aliquet urna quis.`,
            img: 'https://api.lorem.space/image/face?w=200&h=200',
          },
          {
            title: 'Program Name',
            desc: `Sagittis, eu pretium massa quisque cursus augue massa cursus. Sed
              quisque velit, auctor at lobortis hac tincidunt sodales id. Elit
              interdum vel nisi, in enim sagittis at. Netus sagittis eleifend
              aliquet urna quis.`,
            img: 'https://api.lorem.space/image/face?w=200&h=200',
          },
        ].map(({ title, desc, img }) => (
          <div key={title} className="mt-2 flex flex-row">
            <Image width={200} height={200} src={img} alt="Pimgrogram Name" />

            <div className="pl-4">
              <div className="text-3xl font-bold">Program Name</div>
              <div className="text-sm">{desc}</div>
              <button className="mt-4 bg-orange-600  px-8  text-white">
                <span className=" text-sm font-bold">Small</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <span className="text-2xl font-bold text-orange-600">
          Say updated with the latest news!
        </span>
      </div>

      <div className=" mt-3 mb-10 flex flex-col justify-center sm:mb-32 sm:flex-row">
        <input
          className="mt-4 mr-4 appearance-none  border py-2 px-3 leading-tight text-gray-700 shadow"
          id="username"
          type="text"
          placeholder="Name"
        />
        <input
          className="mt-4  mr-4 appearance-none  py-2 px-3 leading-tight text-gray-700 shadow"
          id="email"
          placeholder="Email"
        />

        <button className="mt-4 bg-orange-600  px-5 py-2 text-white sm:py-0">
          <span className=" font-bold text-white">Subscribe!</span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-3 px-10 sm:grid-cols-3 sm:gap-8">
        <div>
          <div className="mb-2 text-4xl font-bold">
            Our <span className="border-b-8 border-b-orange-500">Team</span>
          </div>
          <div className="text-sm  sm:w-96">
            Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
            adipiscing risus pulvinar non sed nullam id integer. Integer quis
            porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
            aliquam pharetra feugiat ante sollicitudin.
          </div>
          <button className="mt-2 bg-orange-600 px-8 py-1">
            <span className="text-base text-white">All Team Members</span>
          </button>
        </div>

        <div>
          <div className="flex flex-row items-center">
            <Image
              width={104}
              height={104}
              alt="Dianne Russell"
              className="rounded-full"
              src="https://api.lorem.space/image/face?w=104&h=104"
            />
            <div className="ml-4">
              <div className="font-bold">Dianne Russell</div>
              <div className="text-sm">Megan Eastman</div>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center">
            <Image
              width={104}
              height={104}
              alt="Dianne Russell"
              className="rounded-full"
              src="https://api.lorem.space/image/face?w=104&h=104"
            />
            <div className="ml-4">
              <div className="font-bold">Dianne Russell</div>
              <div className="text-sm">Megan Eastman</div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row items-center">
            <Image
              width={104}
              height={104}
              alt="Dianne Russell"
              className="rounded-full"
              src="https://api.lorem.space/image/face?w=104&h=104"
            />
            <div className="ml-4">
              <div className="font-bold">Dianne Russell1</div>
              <div className="text-sm">Megan Eastman</div>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center">
            <Image
              width={104}
              height={104}
              alt="Dianne Russell"
              className="rounded-full"
              src="https://api.lorem.space/image/face?w=104&h=104"
            />
            <div className="ml-4">
              <div className="font-bold">Dianne Russell2</div>
              <div className="text-sm">Megan Eastman</div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 flex flex-col items-center">
        <div className="mb-2 text-6xl font-bold">
          The <span className="border-b-8 border-b-orange-500">Blog</span>
        </div>

        <div className="w-96  text-sm">
          Tortor sit nisl purus nunc massa diam velit hac in. Nisl, sem
          adipiscing risus pulvinar non sed nullam id integer. Integer quis
          porttitor mauris arcu, pretium orci quam. Enim cursus mattis nunc
          aliquam pharetra feugiat ante sollicitudin.
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-5 ">
        {[
          {
            img: 'https://api.lorem.space/image/face?w=700&h=527',
            title: 'Blog',
            subtitle: 'Blog title',
            desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, modi
            maxime possimus nam earum hic quia reprehenderit iusto dicta
            recusandae id tenetur minus vero, at officiis explicabo veritatis
            quae similique.`,
          },
          {
            img: 'https://api.lorem.space/image/face?w=700&h=527',
            title: 'Blog',
            subtitle: 'Blog title',
            desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, modi
            maxime possimus nam earum hic quia reprehenderit iusto dicta
            recusandae id tenetur minus vero, at officiis explicabo veritatis
            quae similique.`,
          },
          {
            img: 'https://api.lorem.space/image/face?w=700&h=527',
            title: 'Blog',
            subtitle: 'Blog title',
            desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, modi
            maxime possimus nam earum hic quia reprehenderit iusto dicta
            recusandae id tenetur minus vero, at officiis explicabo veritatis
            quae similique.`,
          },
          {
            img: 'https://api.lorem.space/image/face?w=700&h=527',
            title: 'Blog',
            subtitle: 'Blog title',
            desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, modi
            maxime possimus nam earum hic quia reprehenderit iusto dicta
            recusandae id tenetur minus vero, at officiis explicabo veritatis
            quae similique.`,
          },
        ].map((item) => (
          <div key={item.title} className="">
            <Image alt={item.img} width={700} height={527} src={item.img} />
            <div className="my-4">
              <div className="text-lg">{item.title}</div>
              <div className="text-xl font-bold">{item.subtitle}</div>
            </div>
            <div className="text-base">{item.desc}</div>
            <div className="mt-8 mb-16 flex justify-center">
              <button className="mt-2 bg-orange-600 px-4 py-1">
                <span className="text-white">Read Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 mb-16 flex justify-center">
        <button className="mt-2 bg-orange-600 px-8 py-1">
          <span className="text-white">All Blog Posts</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {sliderImages.map((s, i) => (
          <Image width={460} height={345} key={i} src={s} alt={s} />
        ))}
      </div>

      <div className="my-4 flex flex-row justify-center">
        <Image
          width={40}
          height={40}
          onClick={() => setSliderImages((prev) => shiftLeft(prev))}
          className="cursor-pointer"
          src={`${router.basePath}/assets/images/prev.png`}
          alt="prev"
        />
        <span className="mx-1"></span>
        <Image
          width={40}
          height={40}
          onClick={() => setSliderImages((prev) => shiftRight(prev))}
          className="rotate-180 cursor-pointer"
          src={`${router.basePath}/assets/images/prev.png`}
          alt="next"
        />
      </div>
    </Main>
  );
};

export default Index;
