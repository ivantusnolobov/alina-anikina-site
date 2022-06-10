import * as React from 'react';
import Image from 'next/image';

export default function Bio({ className }: Props) {
  const [version, setVersion] = React.useState<'short' | 'medium' | 'long'>('short');
  const divRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const divEl = divRef.current;
    if (divEl && (version === 'medium' || version === 'long')) {
      const offsetBottom = divEl.offsetTop + divEl.offsetHeight;
      window.scrollTo({ top: offsetBottom });
    }
  }, [version]);

  return (
    <div ref={divRef} className={className}>
      {version === 'long' ? (
        <div>
          <h1 className="mb-4">Hi!</h1>
          <p className="mb-6">
            I’m Alina, a freelance graphic designer living in Bishkek. I create corporate identity,
            posters, design for social networks, landing pages, merchandising, illustrations and
            everything in-between.
          </p>
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
      ) : version === 'medium' ? (
        <div>
          <h1 className="mb-4">Hi!</h1>
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
            }}
          >
            longest version
          </button>
        </div>
      ) : (
        <div>
          <h1 className="mb-4">Hi!</h1>
          <p>I’m Alina, a freelance graphic designer</p>
          <button
            type="button"
            className="block mt-4 text-violet-600 hover:underline"
            onClick={() => {
              setVersion('medium');
            }}
          >
            longer version
          </button>
        </div>
      )}
    </div>
  );
}

type Props = {
  className?: string;
};
