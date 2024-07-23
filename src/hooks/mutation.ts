import { useMutation } from 'react-query';
// import { blog } from "./blogConfig";
// import { AddBlog } from '../services/blog';
import {AddBlog} from "../services/blog";

 export const useAddBlog = () => {
  return useMutation((payload) =>AddBlog({ body: payload }));
};
