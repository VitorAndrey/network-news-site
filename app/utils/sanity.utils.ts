import { createClient, groq } from "next-sanity";

export async function fetchInSanity(query: string) {
  const client = createClient({
    projectId: "l0ez06ph",
    dataset: "production",
    apiVersion: "2023-06-24",
    useCdn: false,
  });

  return client.fetch(groq`${query}`, {
    next: { revalidate: 10000 },
    cache: "no-store",
  });
}
