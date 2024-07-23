import { callApi } from "./api";
import { blog } from "..api/endpoint";

export const AddBlog = ({ body } = {}) => {
  return callApi({
    uriEndPoint: { ...blog.addblog.v1 },
    body,
  });
};

// export default AddBlog;
