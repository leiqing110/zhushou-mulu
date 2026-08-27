import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bots = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './bots' }),
  schema: z.object({
    name: z.string(),
    category: z.enum(['效率', '销售', '营销', '运营', '客成', '生活']),
    integrations: z.array(z.string()),
    contributor: z.string(),
    added_at: z.union([z.string(), z.date()]).transform((v) => {
      if (v instanceof Date) {
        const y = v.getFullYear();
        const m = String(v.getMonth() + 1).padStart(2, '0');
        const d = String(v.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
      }
      return v;
    }),
  }),
});

export const collections = { bots };
