'use client';
import { Box, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

type CardForcusProps = {
  image: string;
  title: string;
  href?: string;
};

const CardForcus = ({ image, title }: CardForcusProps) => {
  return (
    <Link className="group flex flex-col gap-[0.625rem]" href="#">
      <Box overflow="hidden" borderRadius={8} height={383} width={'100%'}>
        <Image
          className="transform transition-all group-hover:scale-105"
          height="100%"
          width="100%"
          src={image}
          alt="image-card"
        />
      </Box>
      <Text
        className="group-hover:underline"
        fontSize="1.125rem"
        fontWeight={700}
      >
        {title}
      </Text>
    </Link>
  );
};

export default CardForcus;
