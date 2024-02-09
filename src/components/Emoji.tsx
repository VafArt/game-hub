import bullsEye from "../assets/bulls-eye.webp";
import thumbUp from "../assets/thump-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 4) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    4: { src: thumbUp, alt: "recommended", boxSize: "22px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
