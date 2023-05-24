import { type SchemaTypeDefinition } from "sanity";
import boardMembers from "./schemas/boardMembers";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [boardMembers],
};
