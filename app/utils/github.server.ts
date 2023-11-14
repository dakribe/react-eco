import { Octokit } from "@octokit/rest";

export const getReadme = async (
  owner: string,
  repo: string
): Promise<string> => {
  const gh = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const readme = await gh.repos.getReadme({ owner, repo });
  const content = Buffer.from(readme.data.content, "base64").toString();
  return content;
};

export const getStarCount = async (
  owner: string,
  repo: string
): Promise<number> => {
  const gh = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const repoResponse = await gh.repos.get({ owner, repo });
  const starCount = repoResponse.data.stargazers_count;
  return starCount;
};
