import { sanityClient } from 'sanity:client';

/**
 * A GROK request that fetches all memorial lobbies
 * @returns an array of all memorial lobby objects
 */
export const fetchLobby = async () => {
  const data = await sanityClient.fetch(`*[_type == "memorial-lobby"]`);
  return data;
};

/**
 * A GROK request that fetches exactly 1 student based on the slug of the memorial lobby object
 * @param student: the name of the student
 * @returns a single object of the fetched student
 */
export const fetchStudent = async (slug: string) => {
  const data = await sanityClient.fetch(
    `*[_type == "memorial-lobby" && slug.current == "${slug}"][0]`
  );

  return data;
};

/**
 * A GROK request that fetches the URL of the video object
 * @param slug: the name of the slug string
 * @returns a video URL from Sanity's CDN content lake
 */
export const fetchVideo = async (slug: string) => {
  const data = await sanityClient.fetch(
    `*[_type == "memorial-lobby" && slug.current == "${slug}"][0]{'video': video.asset->url}`
  );

  return data;
};
