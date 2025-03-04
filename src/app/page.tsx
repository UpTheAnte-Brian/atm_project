import Image from "next/image";
import logo from "../../public/atm_sign.png";
import sysLogo from "../../public/systems.png";
import creditcards from "../../public/creditcard_sprite.png";
import graffiti from "../../public/sticker_graf.png";
import UserInterface from "./ui/interface";

export default function Home() {
  return (
    <div className="items-center justify-items-center p-4">
      <Image
        src={logo}
        width={420}
        height={200}
        className="rounded-lg bg-[#136cae] px-4 py-2"
        alt="Organization Logo"
      />
      <div className="bg-[#e6e6e6] w-sm max-h-screen min-h-[400px] pt-2">
        <div className="bg-[#f1f0e7] w-sm max-h-screen min-h-[500px] items-center justify-items-center p-4">
          <Image
            src={creditcards}
            width={200}
            height={50}
            className="pb-2"
            alt="Organization Logo"
          />
          <UserInterface></UserInterface>
          <Image
            src={sysLogo}
            width={54}
            height={6}
            className="relative left-20 top-1"
            alt="System"
          />
          <Image
            src={graffiti}
            width={160}
            height={110}
            className="relative bottom-8 right-20"
            alt="Graffiti"
          />
        </div>
      </div>
    </div>
  );
}
