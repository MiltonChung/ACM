import Resources from "./schemas/resources";
import boardMembers from "./schemas/boardMembers";
import socialMedias from "./schemas/socialMedias";
import homepageWindows from "./schemas/homepageWindows";
import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [boardMembers, homepageWindows, Resources, socialMedias],
};
