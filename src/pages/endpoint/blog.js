import { defaults } from "autoprefixer";

const blogs = {
  addblog: {
    v1: {
      method: "POST",
      version: "v1",
      uri: "/blog",
    },
  },

  getblog: {
    v1: {
      method: "GET",
      version: "v1",
      uri: "/blog",
    },
  },

  editblog: {
    v1: {
      method: "PUT",
      version: "v1",
      uri: "/blog",
    },
  },

  deleteblog: {
    v1: {
      method: "DELETE",
      version: "v1",
      uri: "/blog",
    },
  },
};

export default blogs;
