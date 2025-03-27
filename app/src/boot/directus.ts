import { boot } from "quasar/wrappers";
import { directus } from "src/services/directus";


export default boot(({ app }) => {
  console.log('directus', directus);
  // Make directus available as $directus
  app.config.globalProperties.$directus = directus;
});
