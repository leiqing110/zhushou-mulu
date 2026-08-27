import { getCollection, getEntry } from 'astro:content';
import { categoryByName, sortBots, type BotCard } from './catalog';

export async function loadBots(): Promise<BotCard[]> {
  const entries = await getCollection('bots');
  return sortBots(
    entries.map((e) => ({
      slug: e.id,
      name: e.data.name,
      category: e.data.category,
      categorySlug: categoryByName(e.data.category)?.slug ?? '',
      integrations: e.data.integrations,
      contributor: e.data.contributor,
      added_at: e.data.added_at,
      prompt: e.body ?? '',
    })),
    'newest',
  );
}

export async function loadBot(slug: string) {
  const entry = await getEntry('bots', slug);
  if (!entry) return undefined;
  const card: BotCard = {
    slug: entry.id,
    name: entry.data.name,
    category: entry.data.category,
    categorySlug: categoryByName(entry.data.category)?.slug ?? '',
    integrations: entry.data.integrations,
    contributor: entry.data.contributor,
    added_at: entry.data.added_at,
    prompt: entry.body ?? '',
  };
  return { card, entry };
}
