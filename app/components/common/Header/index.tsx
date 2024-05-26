'use client';
import {
  Container,
  HStack,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Flex,
} from '@chakra-ui/react';
import Logo from '@/public/icon/logo.svg';
import Offer from '@/public/icon/offer.svg';
import Search from '@/public/icon/search.svg';
import Menu from '@/public/icon/menu.svg';
import Global from '@/public/icon/global.svg';
import CommonImage from '@/app/components/common/CommonImage';
import { CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isLanguage,
    onOpen: onLanguage,
    onClose: onCloseLang,
  } = useDisclosure();

  return (
    <>
      <header className="fixed left-0 top-0 z-[1401] h-auto w-full bg-transparent">
        <Container
          maxW="calc(100% - 2.5rem)"
          className="m-auto flex h-full items-center justify-between"
        >
          <div>
            <a href="/" className="text-lg font-bold text-white">
              <CommonImage className="h-7 w-auto" src={Logo} alt="logo" />
            </a>
          </div>
          <nav
            className={`flex gap-4 p-[0.9375rem] ${isOpen ? 'bg-transparent' : 'bg-white'}`}
          >
            <HStack spacing={'1.25rem'}>
              <Button
                className="flex h-11 w-12 flex-col items-center"
                style={{ backgroundColor: 'transparent' }}
              >
                <CommonImage className="h-6 w-6" src={Offer} alt="icon-offer" />
                <p className={isOpen ? 'text-white' : ''}>Offers</p>
              </Button>
              <Button
                className="flex h-11 w-12 flex-col items-center"
                style={{ backgroundColor: 'transparent' }}
              >
                <CommonImage
                  className="h-6 w-6"
                  src={Search}
                  alt="icon-offer"
                />
                <p className={isOpen ? 'text-white' : ''}>Search</p>
              </Button>
              {isOpen ? (
                <Button
                  onClick={onClose}
                  className="flex h-11 w-12 flex-col items-center "
                  style={{ backgroundColor: 'transparent' }}
                >
                  <CloseIcon fontSize={24} textColor={'white'} />
                  <p className={isOpen ? 'text-white' : ''}>Close</p>
                </Button>
              ) : (
                <Button
                  onClick={onOpen}
                  className="flex h-11 w-12 flex-col items-center"
                  style={{ backgroundColor: 'transparent' }}
                >
                  <CommonImage
                    className="h-6 w-6"
                    src={Menu}
                    alt="icon-offer"
                  />
                  <p className={isOpen ? 'text-white' : ''}>Menu</p>
                </Button>
              )}
            </HStack>
          </nav>
        </Container>
      </header>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay background="transparent" />
        <DrawerContent className="pt-16" backgroundColor="#00205b">
          <DrawerBody
            paddingInlineStart={10}
            paddingInlineEnd={10}
            textColor="white"
            gap={74}
            display="flex"
            flexDir="column"
          >
            <Flex direction="column" gap={2}>
              <Link href="#">Place to go</Link>
              <Link href="#">Place to go</Link>
              <Link href="#">Place to go</Link>
              <Link href="#">Place to go</Link>
            </Flex>
            <Flex direction="column" gap="0.9375rem">
              <Link href="#">Meetings</Link>
              <Link href="#">Meetings</Link>
              <Link href="#">Meetings</Link>
            </Flex>
            <Flex
              onClick={onLanguage}
              cursor="pointer"
              alignItems="center"
              gap="0.625rem"
            >
              <CommonImage
                className="h-16 w-16"
                src={Global}
                alt="icon-offer"
              />
              <p>Change language</p>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Drawer
        isOpen={isLanguage}
        placement="right"
        onClose={onCloseLang}
        size="md"
      >
        <DrawerOverlay background="transparent" />
        <DrawerContent className="pt-16" backgroundColor="#00205b">
          <DrawerBody
            paddingInlineStart={10}
            paddingInlineEnd={10}
            textColor="white"
            gap={74}
            display="flex"
            flexDir="column"
          >
            <h1 onClick={onCloseLang}>Language</h1>
            <p>kkkk ccc</p>
            <p>kkkk ccc</p>
            <p>kkkk ccc</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
