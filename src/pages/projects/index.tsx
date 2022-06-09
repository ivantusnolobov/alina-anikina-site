import Link from 'next/link';
import { getAllProjects } from '@app/api/fetchers';
import type { InferGetStaticPropsType } from 'next';
import { REVALIDATE_DELAY } from '@app/variables';

export default function ProjectsPage({ projects }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main className="container">
      <header>
        <nav className="flex justify-between gap-4 py-6">
          <Link href="/">
            <a className="text-violet-600 hover:underline">About me</a>
          </Link>
          <Link href="/">
            <a className="text-violet-600 hover:underline">Contacts</a>
          </Link>
        </nav>
      </header>
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
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();
  return { props: { projects }, revalidate: REVALIDATE_DELAY };
}
