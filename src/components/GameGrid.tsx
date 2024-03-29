import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames, { platforms } from "../Hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
    gameQuery : GameQuery
}

export const GameGrid = ({gameQuery}:Props) => {
  const { data,error,isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text> {error} </Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton  />{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
            <GameCardContainer key={game.id}>
          <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
