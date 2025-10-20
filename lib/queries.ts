import { defineQuery } from "next-sanity";

export const heroSliderQuery = defineQuery(`*[_type == "slider"] | order(index asc) {
  _id,
  index, 
  title, 
  description,
  image {
    asset -> {
      _id,
      url
    },
  },
}`);