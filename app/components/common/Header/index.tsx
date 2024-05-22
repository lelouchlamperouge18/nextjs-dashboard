import { Box, Container, HStack } from '@chakra-ui/react';
import Logo from '@/public/icon/logo.svg';
import Offer from '@/public/icon/offer.svg';
import CommonImage from '@/app/components/common/CommonImage';
import { Button } from 'antd';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 h-auto w-full bg-transparent">
      <Container className="m-auto flex h-full w-full max-w-[calc(100%-(1.25rem*2))] items-center justify-between">
        <div>
          <a href="/" className="text-lg font-bold text-white">
            <CommonImage className="h-7 w-auto" src={Logo} alt="logo" />
          </a>
        </div>
        <nav className="flex gap-4 bg-white p-3">
          <HStack spacing={'1.25rem'}>
            <Button
              className="flex h-11 w-12 flex-col items-center border-none"
              style={{ backgroundColor: 'transparent' }}
            >
              <CommonImage className="h-6 w-6" src={Offer} alt="icon-offer" />
              <p>Offers</p>
            </Button>
            <Button
              className="flex h-11 w-12 flex-col items-center border-none"
              style={{ backgroundColor: 'transparent' }}
            >
              <CommonImage className="h-6 w-6" src={Offer} alt="icon-offer" />
              <p>Offers</p>
            </Button>
            <Button
              className="flex h-11 w-12 flex-col items-center border-none"
              style={{ backgroundColor: 'transparent' }}
            >
              <CommonImage className="h-6 w-6" src={Offer} alt="icon-offer" />
              <p>Offers</p>
            </Button>
          </HStack>
        </nav>
      </Container>
    </header>
  );
}
