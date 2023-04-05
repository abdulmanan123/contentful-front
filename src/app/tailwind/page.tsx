import "../globals.css";

import Image from "next/image";

export default async function Tailwind() {
  return (
    <>
      <div className="wrapper">
        <div className="menu flex justify-between">
          <a href="#" className="active">
            Profile
          </a>
          <a href="#">Notifications</a>
          <a href="#">Payments</a>
          <a href="#">Settings</a>
        </div>
      </div>

      <div className="flex">
        <div className="quote">
          <p>
            “The success combination in business is: Do what you do better...
            and: do more of what you do.”
          </p>
          <span>- David J. Schwartz</span>
        </div>
        <div className="quote">
          <p>“Give out what you most want to come back.”</p>
          <span>- Robin Sharma</span>
        </div>
        <div className="quote">
          <p>
            “You dont have to be great at something to start, but you have to
            start to be great at something.”
          </p>
          <span>- Zig Ziglar</span>
        </div>
      </div>

      <div className="flex justify-around">
        <div className="card">
          <h1>CSS Flex & Grid</h1>
          <p>
            This book takes a completely different approach. I wont teach you
            the things flex and grid can do.
          </p>
          <div className="links flex justify-between">
            <a href="#"> Prev </a>
            <a href="#"> Next </a>
          </div>
        </div>
        <div className="card">
          <h1>CSS Flex & Grid</h1>
          <p>
            This book takes a completely different approach. I wont teach you
            the things flex and grid can do.
          </p>
          <div className="links flex justify-between">
            <a href="#"> Prev </a>
            <a href="#"> Next </a>
          </div>
        </div>
        <div className="card">
          <h1>CSS Flex & Grid</h1>
          <p>
            This book takes a completely different approach. I wont teach you
            the things flex and grid can do.
          </p>
          <div className="links flex justify-between">
            <a href="#"> Prev </a>
            <a href="#"> Next </a>
          </div>
        </div>
      </div>

      <div className="container flex justify-around flex-wrap">
        <div className="team-profile">
          <Image
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="team-img"
            width={150}
            height={150}
            alt=""
          />
          <h3>Alexa Kardi</h3>
          <p>Founder and CEO</p>
        </div>
        <div className="team-profile">
          <Image
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="team-img"
            width={150}
            height={150}
            alt=""
          />
          <h3>Tavell Monroe</h3>
          <p>Web Developer</p>
        </div>
        <div className="team-profile">
          <Image
            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="team-img"
            width={150}
            height={150}
            alt=""
          />
          <h3>Adale Smith</h3>
          <p>Marketing Specialist</p>
        </div>
        <div className="team-profile">
          <Image
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
            className="team-img"
            width={150}
            height={150}
            alt=""
          />
          <h3>Thomas Mason</h3>
          <p>UX Designer</p>
        </div>
      </div>

      <div className="wrapper">
        <h2 className="font-bold text-3xl">Top Clients</h2>
        <div className="flex justify-around flex-wrap mt-6">
          <Image
            src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png"
            width={180}
            height={100}
            alt=""
          />
          <Image
            src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_300/v1628614672/logos/circleai_dm9slt.png"
            width={180}
            height={100}
            alt=""
          />
          <Image
            src="https://res.cloudinary.com/thirus/image/upload/v1628617465/logos/onpoint_bikaaj.png"
            width={180}
            height={100}
            alt=""
          />
          <Image
            src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_180/v1628617514/logos/Thirus_Logo_Tentative_twhvic.png"
            width={180}
            height={100}
            alt=""
          />
        </div>
      </div>

      <div className="icon-wrap flex items-center profile">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        </span>
        <span className="icon-text mr-4">Video Conference</span>

        <Image
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
          width={80}
          height={80}
          alt=""
        />
        <div>
          <h3>Matt Cooper</h3>
          <p>Designer - CircleAI</p>
        </div>
      </div>

      <div className="container flex justify-center items-stretch">
        <div className="service">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <h2>Photo Shoot</h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="service">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
          </span>
          <h2>Video Production</h2>
          <p>
            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor
            mauris sit amet orci.
          </p>
        </div>
        <div className="service">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </span>
          <h2>Digital Illustration</h2>
          <p>
            Praesent dapibus, neque id cursus faucibus, tortor neque egestas
            auguae.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="container flex items-start faq">
          <span>1</span>
          <div>
            <h3>Whom is this event intended for?</h3>
            <p>
              Rose event is organized for both aspiring and accomplished
              designers, developers and marketers around the world.
            </p>
          </div>
        </div>
        <div className="container flex items-start faq">
          <span>2</span>
          <div>
            <h3>Why should I come maybe its a waste of time?</h3>
            <p>
              You should come to Rose this year because it will be one of the
              most information packed events of the year.
            </p>
          </div>
        </div>
        <div className="container flex items-start faq">
          <span>3</span>
          <div>
            <h3>Any restrictions that I should be aware of?</h3>
            <p>
              Yes you definitely need to leave your preconceptions behind, keep
              an open mind and enjoy the presentations.
            </p>
          </div>
        </div>
      </div>

      <div className="card wrapper flex flex-col justify-center">
        <a href="#" className="link login-link">
          Login
        </a>
        <a href="#" className="link signup-link">
          Create account
        </a>
      </div>

      <div className="wrapper">
        <div className="profile2 flex items-center even:flex-row-reverse even:text-right">
          <Image
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="profile2-img"
            width={150}
            height={150}
            alt=""
          />
          <div>
            <h3>Alexa Kardi</h3>
            <p className="role">Founder and CEO</p>
            <p className="desc">
              Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
        <div className="profile2 flex items-center even:flex-row-reverse even:text-right">
          <Image
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            className="profile2-img"
            width={150}
            height={150}
            alt=""
          />
          <div>
            <h3>Tavell Monroe</h3>
            <p className="role">Web Developer</p>
            <p className="desc">
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
              consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="wrapper1">
        <div className="container flex">
          <input
            type="email"
            className="flex-grow"
            placeholder="Email Address"
          />
          <button type="submit">Subscribe</button>
        </div>
      </div>

      <ul className="flex">
        <li className="flex-grow hover:flex-grow-[3]">Description</li>
        <li className="flex-grow hover:flex-grow-[3]">Care Instructions</li>
        <li className="flex-grow hover:flex-grow-[3]">Return Policy</li>
      </ul>

      <div className="container flex flex-wrap btn">
        <button type="button" className="flex-grow">
          Like
        </button>
        <button type="button" className="flex-grow">
          Share
        </button>
        <button type="button" className="flex-grow-[2]">
          Leave a Comment
        </button>
      </div>
    </>
  );
}
