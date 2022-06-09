import Link from 'next/link';
import { getProjectBySlug, getProjectSlugs } from '@app/api/fetchers';
import type { InferGetStaticPropsType, GetStaticPropsContext } from 'next';
import htmr from 'htmr';
import { REVALIDATE_DELAY } from '@app/variables';

export default function ProjectPage({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <main className="container">
        <header className="mb-10">
          <nav className="flex justify-between gap-4 py-6">
            <div className="flex gap-4">
              <Link href="/">
                <a className="text-violet-600 hover:underline">About me</a>
              </Link>
              <Link href="/projects">
                <a className="text-violet-600 hover:underline">Projects</a>
              </Link>
            </div>
            <Link href="/">
              <a className="text-violet-600 hover:underline">Contacts</a>
            </Link>
          </nav>
        </header>
        <div className="prose prose-lg">
          <h1>{project?.meta.title}</h1>
          {htmr(project.body)}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const project = await getProjectBySlug(params!.slug);
  return { props: { project }, revalidate: REVALIDATE_DELAY };
}

export async function getStaticPaths() {
  const slugs = await getProjectSlugs();
  // TODO: UPDATE FALLBACK TO FALSE
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: 'blocking' };
}
