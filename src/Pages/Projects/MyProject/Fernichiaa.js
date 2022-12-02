import React from "react";
import img from "../../../Assets/project/fernichia.PNG";

const Fernichiaa = () => {
  return (
    <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div class="w-full lg:w-1/2">
        <div class="lg:max-w-lg">
          <h1 class="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
            FERNICHIAA
          </h1>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            This is a second hand furniture selling website.I have built dashboard so user can buy item ,add to wishlist and they can see their order details,seller can see their product selling update ,can update their products information , add products ,boost them and admin can controll users and seller.
          </p>
          <p className="name mt-10 text-xl font-bold">
            It is built with:
          </p>
          <div class="grid gap-6 mt-8 sm:grid-cols-2">
            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Tailwind CSS</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">React</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Firebase</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Node JS</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Express JS</span>
            </div>

            <div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
              <svg
                class="w-5 h-5 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>

              <span class="mx-3">Mongodb</span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
        <img
          class="object-cover w-full h-full max-w-2xl rounded-md"
          src={img}
          alt="glasses photo"
        />
      </div>
    </div>
  );
};

export default Fernichiaa;
