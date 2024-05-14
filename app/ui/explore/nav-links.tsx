'use client';

import HomeIcon from '@/public/icon/home.svg'
import FacultyIcon from '@/public/icon/faculty.svg'
import InstitutionIcon from '@/public/icon/institution.svg'
import VenueIcon from '@/public/icon/venue.svg'
import ConceptIcon from '@/public/icon/concept.svg'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/explore', icon: HomeIcon },
  {
    name: 'Faculty',
    href: '/explore/faculty',
    icon: FacultyIcon,
  },
  { name: 'Institution', href: '/explore/institution', icon: InstitutionIcon },
  { name: 'Venue', href: '/explore/venue', icon: VenueIcon },
  { name: 'Concept', href: '/explore/concept', icon: ConceptIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <Image src={link.icon} alt="icon" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
