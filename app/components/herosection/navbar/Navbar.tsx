"use client";
import Link from "next/link";
import { Logo } from "../../svg";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";

const items = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Explore",
    link: "/explore",
  },
  {
    name: "Travel",
    link: "travel",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];

const Navbar = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div className="relative w-[90%] mx-auto pt-8 pb-8">
      <div className="flex justify-between">
        <Logo className="w-[128px] h-[27.2px] md:h-[45.61px] md:w-[234px]" />
        <div className="hidden lg:flex lg:justify-evenly lg:items-center lg:gap-8 lg:mr-20">
          {items.map((items, index) => (
            <div className="flex-col flex gap-1 w-[57px] h-[24px]" key={index}>
              <Link
                href={items.link}
                className="font-rubik font-medium text-[20px] leading-[100%] tracking-[0%]"
              >
                {items.name}
              </Link>
              <div className="bg-red-700 h-1 w-[57px]"></div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex md:gap-9">
          <button>LogIn</button>
          <button className="w-[134px] h-[64px] rounded-[12px] bg-[#FF7757]">
            SignUp
          </button>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          className="md:hidden bg-white"
        />
      </div>
      <Drawer
        opened={opened}
        onClose={toggle}
        size="xs"
        position="right"
        title="Menu"
        classNames={{
          title: "text-2xl font-Play font-bold text-primaryblue",
          header: "border-b pb-4",
        }}
      >
        <div className="flex flex-col gap-6 font-Play text-xl p-4">
          <ul className="flex flex-col gap-6">
            <li className="border-b pb-2 hover:text-primaryblue transition-colors duration-300">
              <Link href="/" onClick={toggle} className="block">
                Home
              </Link>
            </li>
            <li className="border-b pb-2 hover:text-primaryblue transition-colors duration-300">
              <Link href="/about" onClick={toggle} className="block">
                Explore
              </Link>
            </li>
            <li className="border-b pb-2 hover:text-primaryblue transition-colors duration-300">
              <Link href="/services" onClick={toggle} className="block">
                Travel
              </Link>
            </li>
            <li className="border-b pb-2 hover:text-primaryblue transition-colors duration-300">
              <Link href="/support" onClick={toggle} className="block">
                Blog
              </Link>
            </li>
          </ul>
          <button
            onClick={toggle}
            className="font-Play bg-primaryblue text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity duration-300 w-full"
          >
            Login
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
