import { defineCollection, z } from "astro:content";

const productCollection = defineCollection({
    type:'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publish_date: z.date(),
        image: z.string(),
        price: z.number(),
        message_at: z.string(),
        tags: z.string(),
    })
})

export const collections = {
    product: productCollection,
};