import React from 'react';
import { Image, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
type GridCardItem = {
  id: number;
  image: string;
  title: string;
};

type GridCardPropsType1 = {
  items: GridCardItem[];
};

const GridCardType1: React.FC<GridCardPropsType1> = ({ items }) => {
  return (
    <Link
      href="#"
      className="grid w-2/3 cursor-pointer gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2"
    >
      <Box
        key={items[0].id}
        className="group relative col-span-1 row-span-2 overflow-hidden rounded-lg"
      >
        <Image
          src={items[0].image}
          alt={items[0].title}
          className="h-full w-full transform transition duration-300 group-hover:scale-105"
        />
        <Text className="absolute bottom-2 left-2 bg-opacity-50 p-2 text-2xl font-bold text-white hover:underline">
          {items[0].title}
        </Text>
      </Box>
      {items.slice(1).map((item) => (
        <Box
          key={item.id}
          className="group relative col-span-1 overflow-hidden rounded-lg"
        >
          <Image
            src={item.image}
            alt={item.title}
            className="h-auto w-full transform transition duration-300 group-hover:scale-105"
          />
          <Text className="absolute bottom-2 left-2 rounded bg-opacity-50 p-2 text-2xl font-bold text-white hover:underline">
            {item.title}
          </Text>
        </Box>
      ))}
    </Link>
  );
};

export default GridCardType1;
