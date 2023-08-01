import Image from "next/image";
import Link from "next/link";

import fuji from "../../public/images/fuji.svg";

export default function Header() {
  return (
    <header className="flex w-full py-2 border-b justify-center text-gray-800 h-16">
      <div class="w-11/12 max-w-screen-xl flex items-center ">
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
      </div>
    </header>
  );
}
