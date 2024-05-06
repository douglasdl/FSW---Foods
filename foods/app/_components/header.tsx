import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

export function Header() {
  return (
    <div className="flex h-16 w-full items-center justify-between px-5 pt-6">
      <Image
        src="/logo.svg"
        alt="FSW Foods Logo"
        height={30}
        width={100}
        className="h-[30px] w-[100px]"
      />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
}
