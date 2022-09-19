import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  return (
    <div className="w-full text-gray-700 antialiased">
      {props.meta}

      <div>
        <div className="content ">{props.children}</div>

        <div className=" border-b-4 border-orange-600">
          <div className="flex flex-col justify-center p-4 sm:flex-row sm:justify-between">
            <div className=" mx-auto flex flex-col text-center sm:mx-0 sm:mr-16 sm:flex-row sm:text-left">
              <div>
                <img
                  className="mb-2 w-44 "
                  src={`${router.basePath}/assets/images/logo.png`}
                  alt="logo"
                />
                <div className="flex flex-row">
                  {[
                    {
                      img: `${router.basePath}/assets/images/facebook.png`,
                      alt: 'facebook',
                    },
                    {
                      img: `${router.basePath}/assets/images/mail.png`,
                      alt: 'mail',
                    },
                    {
                      img: `${router.basePath}/assets/images/youtube.png`,
                      alt: 'youtube',
                    },
                    {
                      img: `${router.basePath}/assets/images/instagram.png`,
                      alt: 'instagram',
                    },
                  ].map(({ img, alt }) => (
                    <img key={alt} className="mr-4 w-6" src={img} alt={alt} />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:ml-20 sm:grid-cols-3 sm:gap-20 ">
                <div>
                  <div className="mt-2 font-bold">About Us</div>
                  <div className="mt-2 font-bold">Our Story</div>
                  <div className="mt-2 font-bold">Our Mission</div>
                  <div className="mt-2 font-bold">Our Team</div>
                  <div className="mt-2 font-bold">Careers</div>
                </div>
                <div>
                  <div className="mt-2 font-bold">Get Involved</div>
                  <div className="mt-2 font-bold">Volunteer</div>
                  <div className="mt-2 font-bold">Events</div>
                  <div className="mt-2 font-bold">Partners</div>
                  <div className="mt-2 font-bold">Careers</div>
                </div>
                <div>
                  <div className="mt-2 font-bold">Limitless</div>
                  <div className="mt-2 font-bold">Blog</div>
                  <div className="mt-2 font-bold">Careers</div>
                  <div className="mt-2 font-bold text-orange-600">Donate</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center ">
              <div className="mt-2 text-center font-bold">Stay up to date!</div>

              <input
                className="mt-4 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow "
                id="username"
                type="text"
                placeholder="Name"
              />
              <input
                className="mt-4 mb-3 w-full  appearance-none rounded py-2 px-3 leading-tight text-gray-700 shadow "
                id="password"
                type="password"
                placeholder="Password"
              />

              <button className="mt-2 bg-orange-600  px-20 py-1 text-white">
                <span className=" font-bold text-white">Subscribe!</span>
              </button>
            </div>
          </div>

          <div className="my-2 text-center text-xs text-gray-500">
            ©2020 Limitless. Limitless is a 501(c)(3) tax-exempt charity. All
            Rights Reserved. EIN: 90-1302804
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
