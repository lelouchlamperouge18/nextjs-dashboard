import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

type CardContentProps = {
  image: string;
  title: string;
  description: string;
};

function CardContent({ image, title, description }: CardContentProps) {
  return (
    <Link
      href="#"
      className="group relative flex h-[400px] w-[345px] flex-col items-center justify-center gap-[0.625rem] rounded-lg"
    >
      <Box overflow="hidden" borderRadius={8} height={227} width={'100%'}>
        <Image
          className="transform transition-all group-hover:scale-105"
          height="100%"
          width="100%"
          src={image}
          alt="image-card"
        />
      </Box>
      <Box height="calc(100% - 227px)">
        <Text
          className="py-[0.625rem] group-hover:underline"
          fontSize="1.125rem"
          fontWeight={700}
        >
          {title}
        </Text>
        <Text
          className="text-ellipsis"
          color="#000000a3"
          fontSize="0.8125rem"
          fontWeight={500}
        >
          {description}
        </Text>
      </Box>
    </Link>
  );
}

export default CardContent;
