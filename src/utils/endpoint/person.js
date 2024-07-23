import { defaults } from "autoprefixer";

export const person = {
  addblog: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.version.v1,
      uri: "/blog",
    },
  },
};
