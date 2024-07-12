import React from 'react';
import { Image, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
type GridCardItem = {
  id: number;
  image: string;
  title: string;
};

type GridCardPropsType2 = {
  items: GridCardItem[];
};

const GridCardType2: React.FC<GridCardPropsType2> = ({ items }) => {
  return (
    <Link
      href="#"
      className="grid w-2/3 cursor-pointer gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  "
    >
      {items.map((item) => (
        <Box
          key={item.id}
          className="group relative col-span-1 overflow-hidden rounded-lg"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="h-full w-full transform transition duration-300 group-hover:scale-105"
          />
          <Text className="absolute bottom-2 left-2 rounded bg-opacity-50 p-2 text-2xl font-bold text-white hover:underline">
            {item.title}
          </Text>
        </Box>
      ))}
    </Link>
  );
};

export default GridCardType2;
