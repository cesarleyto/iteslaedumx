import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders'; // Loader oficial para versiones modernas

const oferta = defineCollection({
  // El loader le dice a Astro dónde buscar los archivos .md
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/oferta" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    svg: z.string(),
    link_mapa: z.string(),
    imagen_1: z.string(),
    imagen_2: z.string(),
  }),
});

export const collections = { oferta };