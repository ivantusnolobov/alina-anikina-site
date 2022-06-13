import Link from 'next/link';
import Tag from '@app/components/tag';
import { getAllProjects } from '@app/api/fetchers';
import type { InferGetStaticPropsType } from 'next';
import { REVALIDATE_DELAY } from '@app/variables';
import Layout from '@app/components/layout';
import Image from 'next/image';

export default function ProjectsPage({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <main className="container pb-16 pt-14 lg:pt-20 lg:pb-24">
        <h1 className="max-w-lg mx-auto lg:max-w-none">Projects</h1>
        <ul className="grid max-w-lg gap-6 mx-auto mt-8 lg:grid-cols-3 lg:max-w-none lg:mt-12">
          {projects.map(({ id, meta }) => (
            <li key={id} className="flex flex-col overflow-hidden rounded-lg shadow">
              <figure className="flex-shrink-0 leading-0">
                <Image src={meta.coverImage} width={579} height={434} alt="" />
              </figure>
              <div className="flex-1 p-6 bg-white">
                <Link href={`/projects/${meta.slug}`}>
                  <a className="block">
                    <Tag content={meta.category} />
                    <h2 className="mt-4 text-xl font-semibold">{meta.title}</h2>
                    <p className="mt-2">{meta.description}</p>
                  </a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return { props: { projects }, revalidate: REVALIDATE_DELAY };
}
