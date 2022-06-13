import Link from 'next/link';
import Layout from '@app/components/layout';
import Image from 'next/image';
import heroImage from '@public/img/hero-image.png';

export default function HomePage() {
  return (
    <Layout title="Alina Anikina">
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
          <div className=" md:flex-1">
            <div className="max-w-xl">
              <div className="mb-10">
                <h1 className="mb-4">Hi!</h1>
                <p className="mb-4">
                  I’m Alina, a freelance graphic designer living in Bishkek. I create corporate
                  identity, posters, design for social networks, landing pages, merchandising,
                  illustrations and everything in-between.
                </p>
                <p>I’ll be happy to help you with your amazing project.</p>
                <p>
                  Hit me up at{' '}
                  <Link href="mailto:hey@alinaanikina.com">
                    <a>hey@alinaanikina.com</a>
                  </Link>
                </p>
              </div>
              <h2 className="mb-4">Software</h2>
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
