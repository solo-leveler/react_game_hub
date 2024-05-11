import { Games } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card >
      <Image src={ getCroppedImageUrl(game.background_image)} />
      <CardBody >
        <HStack justifyContent="space-between" marginY={2}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name} </Heading>
      </CardBody>
    </Card>
  );
};
