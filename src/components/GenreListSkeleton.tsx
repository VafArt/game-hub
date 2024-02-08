import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

interface Props {
  skeletons: number[];
}

const GenreListSkeleton = ({ skeletons }: Props) => {
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText width="80px" noOfLines={1} />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
