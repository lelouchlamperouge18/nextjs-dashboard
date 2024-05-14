import Link from 'next/link';
import Image from 'next/image';
import FacultyIcon from '@/public/icon/faculty.svg';
import InstitutionIcon from '@/public/icon/institution.svg';
import VenueIcon from '@/public/icon/venue.svg';
import ConceptIcon from '@/public/icon/concept.svg';
import { lusitana } from '@/app/ui/fonts';
import FacultyImage from '@/public/explore/faculty.jpg';
import InstitutionImage from '@/public/explore/institution.jpg';
import VenueImage from '@/public/explore/venue.jpg';
import ConceptImage from '@/public/explore/concept.png';

const iconMap = {
  faculty: FacultyIcon,
  institution: InstitutionIcon,
  venue: VenueIcon,
  concept: ConceptIcon,
};

export default async function CardWrapper() {
  return (
    <>
      <Card title="Faculty" type="faculty" image={FacultyImage} link="/explore/faculty" />
      <Card title="Institution" type="institution" image={InstitutionImage} link="/explore/institution" />
      <Card title="Venue" type="venue" image={VenueImage} link="/explore/venue" />
      <Card title="Concept" type="concept" image={ConceptImage} link="/explore/concept" />
    </>
  );
}

export function Card({
  title,
  type,
  image,
  link,
}: {
  title: string;
  type: 'faculty' | 'institution' | 'venue' | 'concept';
  image: any;
  link: string;
}) {
  const Icon = iconMap[type];

  return (
    <Link className="rounded-xl bg-gray-50 p-2 shadow-sm cursor-pointer" href={link}>
      <div className="flex p-4">
        <Image src={Icon} alt="icon" />
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white text-center text-xl mx-4 my-2`}
      >
        <Image src={image} alt="falcuty" />
      </p>
    </Link>
  );
}
