import { z } from "zod";

export const createNodeSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  content: z.string().optional(),
});

export type CreateNodeSchema = z.infer<typeof createNodeSchema>;

export const updateNodeSchema = createNodeSchema.extend({
  id: z.string().min(1),
});

export const deleteNodeSchema = z.object({
  id: z.string().min(1),
});
