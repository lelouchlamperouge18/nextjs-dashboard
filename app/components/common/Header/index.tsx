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
import {
  ShoppingOutlined,
  SearchOutlined,
  CloseOutlined,
  TranslationOutlined
} from '@ant-design/icons';
import Logo from '@/public/icon/logo.svg';
import Menu from '@/public/icon/menu.svg';
import CommonImage from '@/app/components/common/CommonImage';
import Link from 'next/link';
import { LanguageSelector } from '../LanguageSelector';

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
            className={`flex gap-4 p-[1.9375rem] ${isOpen ? 'bg-transparent' : 'bg-white'}`}
          >
            <HStack spacing={'1.75rem'}>
              <Button
                className="flex h-11 w-12 flex-col items-center"
                style={{ backgroundColor: 'transparent' }}
              >
                <ShoppingOutlined style={{ fontSize: "24px", color: isOpen ? "white" : "black" }} />
                <p className={isOpen ? 'text-white' : ''}>Offers</p>
              </Button>
              <Button
                className="flex h-11 w-12 flex-col items-center"
                style={{ backgroundColor: 'transparent' }}
              >
                <SearchOutlined style={{ fontSize: "24px", color: isOpen ? "white" : "black" }} />
                <p className={isOpen ? 'text-white' : ''}>Search</p>
              </Button>
              <LanguageSelector />
              {isOpen ? (
                <Button
                  onClick={onClose}
                  className="flex h-11 w-12 flex-col items-center "
                  style={{ backgroundColor: 'transparent' }}
                >
                  <CloseOutlined style={{ fontSize: "24px", color: "white" }} />
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
        <DrawerContent className="pt-32" backgroundColor="#00205b">
          <DrawerBody
            paddingInlineStart={10}
            paddingInlineEnd={10}
            textColor="white"
            gap={74}
            display="flex"
            flexDir="column"
          >
            <Flex direction="column" gap={4} className='text-3xl'>
              <Link href="#">Visit our city</Link>
              <Link href="#">Things to do</Link>
              <Link href="#">Plan your trip</Link>
            </Flex>
            <Flex direction="column" gap="0.9375rem" className='text-lg'>
              <Link href="#">Contact us</Link>
              <Link href="#">About us</Link>
              <Link href="#">Images library</Link>
              <Link href="#">Social media</Link>
              <Link href="#">Get your own city site</Link>
              <Link href="#">Articles contribution</Link>
              <Link href="#">Donation</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
