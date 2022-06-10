import Bio from '@app/components/bio';
import Layout from '@app/components/layout';
import Image from 'next/image';
import heroImage from '@public/img/hero-image.png';

export default function HomePage() {
  return (
    <Layout>
      <main className="container my-auto">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <figure className="max-w-md -ml-6 md:order-last md:flex-1 md:max-w-none lg:-ml-0 lg:-mt-12">
            <Image
              src={heroImage}
              width={596}
              height={722}
              alt="Drawing of Alina sitting on a chair with iPad"
              className="block"
            />
          </figure>
          <div className="md:flex-1">
            <Bio className="max-w-md" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
