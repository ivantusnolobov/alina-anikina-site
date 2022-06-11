import Link from 'next/link';
import { getAllProjects } from '@app/api/fetchers';
import type { InferGetStaticPropsType } from 'next';
import { REVALIDATE_DELAY } from '@app/variables';
import Layout from '@app/components/layout';

export default function ProjectsPage({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <main className="container">
        <div>
          <h1 className="mb-8 text-4xl font-bold">Projects</h1>
          <ul className="flex flex-col gap-4">
            {projects.map(({ id, meta }) => (
              <li key={id}>
                <Link href={`/projects/${meta.slug}`}>
                  <a className="text-violet-600 hover:underline">{meta.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return { props: { projects }, revalidate: REVALIDATE_DELAY };
}
