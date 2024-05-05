"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  HeartIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ScrollTextIcon,
} from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Separator } from "./ui/separator";

const Header = () => {
  const { data } = useSession();

  const handleSignInClicks = () => signIn();
  const handleSignOutClicks = () => signOut();

  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href="/">
        <div className="relative h-[30px] w-[100px]">
          <Image src="/Logo.svg" alt="Logo" fill className="object-cover" />
        </div>
      </Link>
      <Sheet>
        <SheetTrigger>
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left text-xl">Menu</SheetTitle>
          </SheetHeader>
          {data?.user ? (
            <>
              <div className="flex justify-between pt-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={data?.user?.image as string | undefined}
                    />
                    <AvatarFallback>
                      {data?.user?.name?.split(" ")[0][0]}
                      {data?.user?.name?.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{data?.user?.name}</h3>
                    <span className="block text-xs text-muted-foreground ">
                      {data?.user?.email}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between pt-10">
                <h2 className="font-semibolds">Olá. Faça seu login!</h2>
                <Button size="icon" onClick={handleSignInClicks}>
                  <LogInIcon />
                </Button>
              </div>
            </>
          )}
          {data?.user && (
            <>
              <div className="py-6">
                <Separator className="h-[0.5px] text-muted-foreground" />
              </div>
              <div className="space-y-3">
                {[
                  {
                    icon: <HomeIcon size={16} />,
                    name: "Home",
                    url: "/",
                  },
                  {
                    icon: <ScrollTextIcon size={16} />,
                    name: "Meus Pedidos",
                    url: "/",
                  },
                  {
                    icon: <HeartIcon size={16} />,
                    name: "Restaurantes Favoritos",
                    url: "/",
                  },
                ].map(({ icon, name, url }) => (
                  <Link key={name} href={url}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start space-x-3 rounded-full text-sm"
                    >
                      {icon}
                      <span className="block">{name}</span>
                    </Button>
                  </Link>
                ))}
              </div>
            </>
          )}
          {data?.user && (
            <>
              <div className="py-6">
                <Separator className="h-[0.5px] text-muted-foreground" />
              </div>
              <Button
                variant="ghost"
                className="w-full justify-start space-x-3 rounded-full text-sm"
                onClick={handleSignOutClicks}
              >
                <LogOutIcon />
                <span className="block">Sair da conta </span>
              </Button>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
