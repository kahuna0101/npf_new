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

export const formsQuery = defineQuery(`*[_type == "form"] | order(_createdAt desc) {
  _id,
  title,
  description,
  "file": {
    "url": file.asset->url,
    "type": file.asset->mimeType,
    "size": round(file.asset->size / (1024 * 1024), 2)
  }
}`)