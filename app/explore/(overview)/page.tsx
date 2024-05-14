import CardWrapper from '@/app/ui/explore/cards';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Explore
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <CardWrapper />
      </div>
    </main>
  );
}
