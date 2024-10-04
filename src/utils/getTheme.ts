import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const getTailwindConfiguration = () => {
  return resolveConfig(tailwindConfig).theme;
};

export const theme = getTailwindConfiguration();
