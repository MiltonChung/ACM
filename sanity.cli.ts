/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";

const dataset = "production";
const projectId = "mi7q4kn6";

export default defineCliConfig({ api: { projectId, dataset } });
