'use client';
import Global from '@/public/icon/global.svg';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import CommonImage from '../CommonImage';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { languages } from '@/app/mock/languages.json';
import { TranslationOutlined } from '@ant-design/icons';

export function LanguageSelector() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex h-11 w-12 flex-col items-center"
        style={{ backgroundColor: 'transparent' }}
      >
        <TranslationOutlined
          style={{ fontSize: '24px', color: isOpen ? 'white' : 'black' }}
        />
        <p className={isOpen ? 'text-white' : ''}>Language</p>
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay background="transparent" />
        <DrawerContent className="pt-16" backgroundColor="#00205b">
          <DrawerBody
            paddingInlineStart={10}
            paddingInlineEnd={10}
            textColor="white"
            gap={10}
            display="flex"
            flexDir="column"
          >
            <Stack
              onClick={onClose}
              _hover={{ color: '#9bb9ff' }}
              fontSize="1.5rem"
              fontWeight={700}
              alignItems="center"
              direction="row"
              spacing={0}
              cursor="pointer"
            >
              <ChevronLeftIcon viewBox="8 0 24 24" fontSize="3rem" />
              <Text>Languages</Text>
            </Stack>
            <Flex direction="column" gap="0.625rem">
              {languages.map((language) => (
                <Text
                  key={language.id}
                  className="cursor-pointer hover:text-blue-100"
                >
                  {language.label}
                </Text>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
