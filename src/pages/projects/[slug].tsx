import htmr from "htmr"
import type { InferGetStaticPropsType, GetStaticPropsContext } from "next"
import Link from "next/link"

import { getProjectBySlug, getProjectSlugs } from "@app/api/fetchers"
import Layout from "@app/components/layout"
import { REVALIDATE_DELAY } from "@app/variables"

export default function ProjectPage({ project }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title={`${project.meta.title} by Anikina Alina`}>
      <main className="container pb-16 pt-14 lg:pt-20 lg:pb-24">
        <div className="mx-auto prose">
          <h1>{project.meta.title}</h1>
          {htmr(project.body)}
        </div>
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const project = await getProjectBySlug(params!.slug)
  return { props: { project }, revalidate: REVALIDATE_DELAY }
}

export async function getStaticPaths() {
  const slugs = await getProjectSlugs()
  // TODO: UPDATE FALLBACK TO FALSE
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: "blocking" }
}
