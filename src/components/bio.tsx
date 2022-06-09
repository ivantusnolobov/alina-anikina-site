import * as React from 'react';
import Image from 'next/image';

export default function Bio() {
  const [version, setVersion] = React.useState<'short' | 'medium' | 'long'>('short');
  const divRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      {version === 'long' ? (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Hi!</h1>
          <p className="mb-6">
            I’m Alina, a freelance graphic designer living in Bishkek. I create corporate identity,
            posters, design for social networks, landing pages, merchandising, illustrations and
            everything in-between.
          </p>
          <h2 className="mb-4 text-2xl font-bold">Software</h2>
          <p className="mb-4">
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
      ) : version === 'medium' ? (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Hi!</h1>
          <p>
            I’m Alina, a freelance graphic designer living in Bishkek. I create corporate identity,
            posters, design for social networks, landing pages, merchandising, illustrations and
            everything in-between.
          </p>
          <button
            type="button"
            className="block mt-4 text-violet-600 hover:underline"
            onClick={() => {
              setVersion('long');
              divRef.current?.scrollIntoView();
            }}
          >
            longest version
          </button>
        </div>
      ) : (
        <div>
          <h1 className="mb-4 text-3xl font-bold">Hi!</h1>
          <p>I’m Alina, a freelance graphic designer</p>
          <button
            type="button"
            className="block mt-4 text-violet-600 hover:underline"
            onClick={() => {
              setVersion('medium');
              divRef.current?.scrollIntoView();
            }}
          >
            longer version
          </button>
        </div>
      )}
    </div>
  );
}
