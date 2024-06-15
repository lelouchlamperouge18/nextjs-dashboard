import { ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from '@/app/ui/home.module.css';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import SlideData from '@/app/mock/carousel.json';
import CommonCarousel from '@/app/components/common/CommonCarousel/Carousel';
import { CardContent, CardFull } from '@/app/components/common/Card';
import CardForcus from './components/common/Card/CardForcus';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex flex-col gap-16">
        <CommonCarousel>
          {SlideData.full.map((slide) => (
            <CardFull key={slide.id} title={slide.title} image={slide.image} />
          ))}
        </CommonCarousel>
        <CommonCarousel>
          {SlideData.content.map((slide) => (
            <CardContent
              key={slide.id}
              title={slide.title}
              image={slide.image}
              description={slide.description}
            />
          ))}
        </CommonCarousel>
        <div className="px-52">
          <CommonCarousel
            className="custom__single-carousel"
            carouselProps={{
              responsive: {
                desktop: {
                  breakpoint: { max: 4000, min: 1024 },
                  items: 1,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 1,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              },
            }}
          >
            {SlideData.focus.map((slide) => (
              <CardForcus
                key={slide.id}
                title={slide.title}
                image={slide.image}
              />
            ))}
          </CommonCarousel>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to ACME app.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Dashboard</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/explore"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Explore</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
