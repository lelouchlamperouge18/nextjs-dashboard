'use client';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { languages } from '@/app/mock/languages.json';
import { CloseOutlined, TranslationOutlined } from '@ant-design/icons';
import { HeaderOpenType } from '@/app/models/header.model';

type LanguageSelectorProps = {
  type?: HeaderOpenType;
  onChangeType: (type?: HeaderOpenType) => void;
};

export function LanguageSelector({
  type,
  onChangeType,
}: LanguageSelectorProps) {
  return (
    <>
      {type === HeaderOpenType.language ? (
        <Button
          onClick={() => onChangeType()}
          className="flex h-11 w-12 flex-col items-center "
          style={{ backgroundColor: 'transparent' }}
        >
          <CloseOutlined style={{ fontSize: '24px', color: 'white' }} />
          <p className="text-white">Close</p>
        </Button>
      ) : (
        <Button
          onClick={() => onChangeType(HeaderOpenType.language)}
          className="flex h-11 w-12 flex-col items-center"
          style={{ backgroundColor: 'transparent' }}
        >
          <TranslationOutlined
            style={{
              fontSize: '24px',
              color: type ? 'white' : 'black',
            }}
          />
          <p className={type ? 'text-white' : ''}>Language</p>
        </Button>
      )}
      <Drawer
        isOpen={!!type}
        placement="right"
        onClose={() => onChangeType()}
        size="md"
      >
        <DrawerOverlay background="transparent" />
        <DrawerContent className="pt-24" backgroundColor="#00205b">
          <DrawerBody
            paddingInlineStart={10}
            paddingInlineEnd={10}
            textColor="white"
            gap={10}
            display="flex"
            flexDir="column"
          >
            <Stack
              onClick={() => onChangeType()}
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
