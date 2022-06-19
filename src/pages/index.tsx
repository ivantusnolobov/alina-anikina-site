import Link from '@app/components/link';
import Layout from '@app/components/layout';
import Image from 'next/image';
import heroImage from '@public/img/hero-image.png';

export default function HomePage() {
  return (
    <Layout title="Alina Anikina">
      <main className="container my-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          <figure className="-ml-6 lg:order-last lg:ml-0">
            <Image
              src={heroImage}
              width={596}
              height={722}
              alt="Drawing of Alina sitting on a chair with iPad"
              className="block"
            />
          </figure>
          <div className="flex items-center max-w-md">
            <div>
              <div className="mb-10">
                <h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Hi!</h1>
                <p className="mb-4">
                  I’m Alina, a freelance graphic designer living in Bishkek. I create corporate
                  identity, posters, design for social networks, landing pages, merchandising,
                  illustrations and everything in-between.
                </p>
                <p>I’ll be happy to help you with your amazing project.</p>
                <p>
                  Hit me up at{' '}
                  <Link href="mailto:hey@alinaanikina.com" className="text-purple-500">
                    hey@alinaanikina.com
                  </Link>
                </p>
              </div>
              <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">Software</h2>
              <p className="mb-6">
                To create I use programs such as: Figma, Illustrator, Photoshop, Procreate.
              </p>
              <figure>
                <div className="flex gap-4 mb-4">
                  <Image
                    src="/icons/figma.svg"
                    alt="figma logo"
                    width={64}
                    height={64}
                    className="block"
                  />
                  <Image
                    src="/icons/photoshop.svg"
                    alt="photoshop logo"
                    width={64}
                    height={64}
                    className="block"
                  />
                  <Image
                    src="/icons/illustrator.svg"
                    alt="illustrator logo"
                    width={64}
                    height={64}
                    className="block"
                  />
                  <Image
                    src="/icons/procreate.svg"
                    alt="procreate logo"
                    width={64}
                    height={64}
                    className="block"
                  />
                </div>
                <figcaption className="text-zinc-400">App icons by Icons8</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
