import { type SchemaTypeDefinition } from "sanity";
import boardMembers from "./schemas/boardMembers";
import homepageWindows from "./schemas/homepageWindows";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [boardMembers, homepageWindows],
};
