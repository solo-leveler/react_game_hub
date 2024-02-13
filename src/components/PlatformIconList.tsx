import { Icon, HStack } from "@chakra-ui/react";
import { platforms } from "../Hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: platforms[];
}
export const PlatformIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platform.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};
