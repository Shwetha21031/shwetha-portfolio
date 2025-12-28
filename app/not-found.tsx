'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid place-items-center text-center font-sulphur-point h-screen w-full">
      <div>
        <h1 className="text-xl font-extralight">Oops! PAGE NOT FOUND</h1>
        <h2 className="text-9xl font-black robo-flex-point -my-2">404</h2>
        <p className="text-xl font-extralight">
          Sorry, but the page you requested <br /> was not found
        </p>
        <Link href="/">
          <div className="relative inline-block mt-5">
            <div
              className="
              
                absolute inset-0
                bg-[rgb(146,9,50)]
                translate-x-[10px]
                translate-y-[10px]
                z-0
              "
            />

            {/* BUTTON */}
            <button
              className="
                relative z-10
                px-10 py-4
                text-2xl font-medium text-black
                bg-[#FF0B55]
                hover:bg-[#ff326f]
                transition-transform duration-150
                active:translate-x-[10px]
                active:translate-y-[10px]
                cursor-pointer
              "
            >
              Return home
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

