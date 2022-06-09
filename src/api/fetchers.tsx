import { Octokit } from 'octokit';
import matter from 'gray-matter';
import invariant from 'tiny-invariant';
import snarkdown from 'snarkdown';
import { GITHUB_REPO_ACCESS_TOKEN } from '@app/variables';

const http = new Octokit({
  auth: GITHUB_REPO_ACCESS_TOKEN,
});

function getGhIssues() {
  return http.request('GET /repos/{owner}/{repo}/issues', {
    owner: 'ivantusnolobov',
    repo: 'alina-anikina-site',
    creator: 'ivantusnolobov',
    labels: 'published',
  });
}

function validateFrontmatter(id: number, frontmatter: { [key: string]: any }) {
  type Frontmatter = {
    slug: string | undefined;
    title: string | undefined;
    date: Date | undefined;
    coverImage: string | undefined;
    categories: string[] | undefined;
  };
  const { slug, title, date, coverImage, categories } = frontmatter as Frontmatter;
  invariant(
    slug && title && date && coverImage && categories,
    `Issue ${id} (frontmatter): slug, title, date, coverImage, categories`,
  );
  return { slug, title, date: String(date), coverImage, categories };
}

export async function getAllProjects() {
  const ghIssues = await getGhIssues();
  let projects = [];

  for (const item of ghIssues.data) {
    try {
      invariant(item.body, `Issue ${item.id} should have a body`);
      const frontmatterRaw = matter(item.body);
      const meta = validateFrontmatter(item.id, frontmatterRaw.data);
      const body = snarkdown(frontmatterRaw.content);
      projects.push({ id: item.id, meta, body });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log('Unexpected error', error);
      }
    }
  }

  return projects;
}

export async function getProjectSlugs() {
  const projects = await getAllProjects();
  return projects.map((project) => project.meta.slug);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getAllProjects();
  const project = projects.find((project) => project.meta.slug === slug);
  invariant(project, `Project with slug: "${slug}" is not found`);
  return project;
}
