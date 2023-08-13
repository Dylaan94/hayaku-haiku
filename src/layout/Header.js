import Image from "next/image";
import Link from "next/link";

import fuji from "../../public/images/fuji.svg";

export default function Header() {
  return (
    <header className="flex w-full py-2 border-b justify-center text-gray-800 h-16">
      <div class="w-[95%] max-w-screen-xl flex items-center ">
        <Image
          width={60}
          height={10}
          src={"/logos/haiku-logo.png"}
          alt="Haiku Logo"
        />
        <Link className="px-4" href="/">
          Home
        </Link>
        <Link href="/about">About</Link>
        <a
          className="ml-auto hover:cursor-pointer"
          href="https://www.tailroad.com"
          target="_blank"
        >
          <Image
            src={"/logos/tailroad.png"}
            alt="Tailroad Logo"
            width={45}
            height={10}
            className=" rounded-full"
          />
        </a>
      </div>
    </header>
  );
}
