import { Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

type CardFullProps = {
  image: string;
  title: string;
};

function CardFull({ image, title }: CardFullProps) {
  return (
    <Link
      href="#"
      className="group relative flex h-[377px] w-[345px] items-center justify-center overflow-hidden rounded-lg"
    >
      <Image
        className="transform transition-all group-hover:scale-105"
        height="100%"
        width="100%"
        src={image}
        alt="image-card"
      />
      <Text
        className="group-hover:underline"
        position="absolute"
        width="calc(100% - 40px)"
        color="white"
        fontSize="1.5rem"
        fontWeight={700}
        bottom={5}
        left={5}
      >
        {title}
      </Text>
    </Link>
  );
}

export default CardFull;
