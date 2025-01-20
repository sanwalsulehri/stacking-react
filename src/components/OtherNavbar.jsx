import React, { useState } from "react";
import user from '/user.png'

const OtherNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = [
    { name: "Home", href: "/", isActive: true },
    {
      name: "Staking calculator",
      href: "/staking-calculator",
      isActive: false,
    },
    { name: "About us", href: "/about-us", isActive: false },
    { name: "FAQ", href: "/faq", isActive: false },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className="max-w-[1250px] px-4 mx-auto py-8 flex items-center justify-between gap-2">
        <a href="/">
          <svg
            className="sm:w-auto h-auto w-32"
            width="142"
            height="42"
            viewBox="0 0 142 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="45" height="41" rx="6" fill="#48FF2C" />
            <circle cx="22.5" cy="21" r="13.5" fill="black" />
            <path
              d="M28.9719 20.6593L27.0403 20.1075C25.2638 19.5996 23.8995 18.236 23.3917 16.4588L22.8399 14.5272C22.7528 14.2233 22.2456 14.2233 22.1585 14.5272L21.6067 16.4588C21.0988 18.236 19.7346 19.6003 17.9581 20.1075L16.0264 20.6593C15.8741 20.7025 15.7693 20.842 15.7693 21C15.7693 21.1579 15.8741 21.2968 16.0264 21.3407L17.9581 21.8925C19.7346 22.4004 21.0988 23.7639 21.6067 25.5411L22.1585 27.4727C22.2024 27.625 22.3412 27.7299 22.4992 27.7299C22.6571 27.7299 22.796 27.625 22.8399 27.4727L23.3917 25.5411C23.8995 23.7639 25.2638 22.3996 27.0403 21.8925L28.9719 21.3407C29.1242 21.2975 29.229 21.1579 29.229 21C29.229 20.842 29.1242 20.7032 28.9719 20.6593Z"
              fill="white"
            />
            <path
              d="M71.128 29.788C69.944 29.788 68.864 29.596 67.888 29.212C66.928 28.812 66.152 28.22 65.56 27.436C64.984 26.636 64.672 25.628 64.624 24.412H68.608C68.672 24.972 68.896 25.476 69.28 25.924C69.68 26.372 70.28 26.596 71.08 26.596C71.768 26.596 72.28 26.444 72.616 26.14C72.968 25.836 73.144 25.436 73.144 24.94C73.144 24.716 73.104 24.508 73.024 24.316C72.96 24.124 72.824 23.94 72.616 23.764C72.408 23.572 72.088 23.38 71.656 23.188C71.24 22.996 70.68 22.788 69.976 22.564C68.664 22.148 67.64 21.66 66.904 21.1C66.168 20.54 65.648 19.94 65.344 19.3C65.056 18.66 64.912 18.004 64.912 17.332C64.928 16.244 65.2 15.34 65.728 14.62C66.256 13.884 66.96 13.332 67.84 12.964C68.72 12.596 69.704 12.412 70.792 12.412C71.88 12.412 72.872 12.604 73.768 12.988C74.68 13.356 75.416 13.908 75.976 14.644C76.536 15.38 76.824 16.292 76.84 17.38H72.76C72.744 16.948 72.56 16.54 72.208 16.156C71.856 15.772 71.336 15.58 70.648 15.58C70.152 15.596 69.728 15.74 69.376 16.012C69.04 16.268 68.872 16.636 68.872 17.116C68.872 17.532 69.048 17.892 69.4 18.196C69.752 18.5 70.248 18.78 70.888 19.036C71.544 19.292 72.304 19.564 73.168 19.852C73.824 20.076 74.4 20.34 74.896 20.644C75.408 20.932 75.832 21.276 76.168 21.676C76.504 22.06 76.76 22.5 76.936 22.996C77.112 23.492 77.2 24.052 77.2 24.676C77.2 25.7 76.936 26.596 76.408 27.364C75.896 28.132 75.184 28.732 74.272 29.164C73.36 29.58 72.312 29.788 71.128 29.788ZM83.3481 29.5C81.9401 29.5 80.8761 29.156 80.1561 28.468C79.4521 27.78 79.1001 26.724 79.1001 25.3V20.644H77.8521V17.596H79.1001V14.644H82.7961V17.596H85.2201V20.644H82.7961V25.348C82.7961 25.748 82.8761 26.02 83.0361 26.164C83.2121 26.292 83.5001 26.356 83.9001 26.356H85.2201V29.5H83.3481ZM89.9997 29.788C89.3117 29.788 88.6717 29.652 88.0797 29.38C87.4877 29.092 87.0077 28.684 86.6397 28.156C86.2877 27.612 86.1117 26.956 86.1117 26.188C86.1117 25.308 86.3437 24.596 86.8077 24.052C87.2717 23.492 87.8877 23.084 88.6557 22.828C89.4397 22.572 90.2957 22.444 91.2237 22.444H93.9117C93.9117 22.028 93.8397 21.66 93.6957 21.34C93.5517 21.02 93.3357 20.772 93.0477 20.596C92.7597 20.404 92.3997 20.308 91.9677 20.308C91.5197 20.308 91.1117 20.404 90.7437 20.596C90.3757 20.788 90.1437 21.116 90.0477 21.58H86.4717C86.5357 20.7 86.8317 19.948 87.3597 19.324C87.8877 18.684 88.5597 18.188 89.3757 17.836C90.2077 17.484 91.0957 17.308 92.0397 17.308C93.1437 17.308 94.1117 17.516 94.9437 17.932C95.7917 18.332 96.4477 18.916 96.9117 19.684C97.3757 20.436 97.6077 21.348 97.6077 22.42V25.468C97.6077 25.82 97.6557 26.092 97.7517 26.284C97.8637 26.476 98.1437 26.572 98.5917 26.572V29.5C97.8237 29.5 97.1837 29.452 96.6717 29.356C96.1597 29.26 95.7277 29.084 95.3757 28.828C95.0237 28.556 94.7037 28.164 94.4157 27.652C93.8877 28.356 93.2637 28.892 92.5437 29.26C91.8237 29.612 90.9757 29.788 89.9997 29.788ZM91.2957 26.956C91.7597 26.956 92.1837 26.86 92.5677 26.668C92.9677 26.46 93.2877 26.172 93.5277 25.804C93.7677 25.436 93.8877 25.02 93.8877 24.556V24.412H91.6077C91.2877 24.412 90.9917 24.46 90.7197 24.556C90.4477 24.636 90.2317 24.772 90.0717 24.964C89.9117 25.14 89.8317 25.388 89.8317 25.708C89.8317 26.172 89.9837 26.5 90.2877 26.692C90.5917 26.868 90.9277 26.956 91.2957 26.956ZM99.5241 29.5V12.7H103.22V22.348L106.748 17.596H111.308L106.412 23.5L111.476 29.5H106.892L103.22 24.436V29.5H99.5241ZM113.913 16.54C113.289 16.54 112.753 16.316 112.305 15.868C111.857 15.42 111.633 14.884 111.633 14.26C111.633 13.636 111.857 13.1 112.305 12.652C112.753 12.204 113.289 11.98 113.913 11.98C114.569 11.98 115.113 12.204 115.545 12.652C115.977 13.1 116.193 13.636 116.193 14.26C116.193 14.884 115.977 15.42 115.545 15.868C115.113 16.316 114.569 16.54 113.913 16.54ZM112.065 29.5V17.596H115.761V29.5H112.065ZM117.219 29.5V17.596H120.915V19.036C121.347 18.428 121.859 17.988 122.451 17.716C123.043 17.444 123.707 17.308 124.443 17.308C125.931 17.308 127.059 17.788 127.827 18.748C128.595 19.692 128.979 20.924 128.979 22.444V29.5H125.307V22.9C125.307 22.148 125.123 21.548 124.755 21.1C124.387 20.636 123.835 20.404 123.099 20.404C122.379 20.404 121.835 20.644 121.467 21.124C121.099 21.588 120.915 22.18 120.915 22.9V29.5H117.219ZM135.603 35.068C134.515 35.068 133.539 34.948 132.675 34.708C131.811 34.468 131.123 34.076 130.611 33.532C130.115 33.004 129.867 32.308 129.867 31.444C129.867 30.884 129.987 30.396 130.227 29.98C130.467 29.58 130.835 29.228 131.331 28.924C130.915 28.684 130.603 28.38 130.395 28.012C130.187 27.644 130.083 27.22 130.083 26.74C130.083 25.684 130.563 24.884 131.523 24.34C131.171 23.972 130.907 23.564 130.731 23.116C130.555 22.652 130.467 22.156 130.467 21.628C130.467 20.748 130.675 19.988 131.091 19.348C131.523 18.692 132.115 18.188 132.867 17.836C133.619 17.484 134.475 17.308 135.435 17.308C136.155 17.308 136.803 17.404 137.379 17.596H141.651V20.068H140.139C140.219 20.292 140.283 20.54 140.331 20.812C140.395 21.068 140.427 21.34 140.427 21.628C140.427 22.492 140.203 23.252 139.755 23.908C139.323 24.548 138.731 25.052 137.979 25.42C137.227 25.772 136.379 25.948 135.435 25.948C135.083 25.948 134.747 25.924 134.427 25.876C134.123 25.812 133.827 25.724 133.539 25.612C133.267 25.74 133.131 25.948 133.131 26.236C133.131 26.748 133.547 27.004 134.379 27.004H136.827C137.787 27.004 138.619 27.14 139.323 27.412C140.027 27.684 140.571 28.1 140.955 28.66C141.339 29.22 141.531 29.948 141.531 30.844C141.531 31.804 141.251 32.596 140.691 33.22C140.147 33.844 139.419 34.308 138.507 34.612C137.611 34.916 136.643 35.068 135.603 35.068ZM135.699 32.356C136.355 32.356 136.923 32.252 137.403 32.044C137.883 31.836 138.123 31.508 138.123 31.06C138.123 30.244 137.563 29.836 136.443 29.836H134.955C134.411 29.836 133.995 29.932 133.707 30.124C133.419 30.332 133.275 30.644 133.275 31.06C133.275 31.38 133.387 31.636 133.611 31.828C133.835 32.02 134.131 32.156 134.499 32.236C134.867 32.316 135.267 32.356 135.699 32.356ZM135.435 23.26C135.963 23.26 136.395 23.108 136.731 22.804C137.067 22.5 137.235 22.108 137.235 21.628C137.235 21.164 137.067 20.78 136.731 20.476C136.395 20.156 135.963 19.996 135.435 19.996C134.891 19.996 134.459 20.156 134.139 20.476C133.819 20.78 133.659 21.164 133.659 21.628C133.659 22.108 133.819 22.5 134.139 22.804C134.459 23.108 134.891 23.26 135.435 23.26Z"
              fill="white"
            />
          </svg>
        </a>

        <div className="xl:flex hidden items-center gap-6 xl:gap-[34px]">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-white ${
                index === 0 ? "text-white" : "text-[#71798A]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex  items-center gap-4 ">
          <div className="flex  items-center cursor-pointer  gap-4">
            <h1 className="font-semibold hidden sm:inline-flex">Reece.J</h1>
           <img src={user} className="sm:w-[52px] w-10 h-10 rounded-full object-cover sm:h-[52px] " alt="" />
          </div>
          <div
            onClick={toggleDrawer}
            className="text-[#71798A] lg:hidden hover:text-white cursor-pointer "
          >
            <svg
              className="w-8 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>

      {/* drawer */}
      <div
        className={`flex flex-col transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out h-screen justify-center sm:px-6 py-8 px-4 w-full sm:w-1/2 fixed top-0 left-0 bg-[#0c0f14]  gap-6 xl:gap-[34px]`}
      >
        <div onClick={toggleDrawer} className="absolute cursor-pointer top-5 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-auto w-8 text-[#71798A] hover:text-white"
            width="15"
            height="15"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className={`font-medium text-xl  hover:text-white ${
              index === 0 ? "text-white" : "text-[#71798A]"
            }`}
          >
            {link.name}
          </a>
        ))}

       
      </div>
    </>
  );
};

export default OtherNavbar;
