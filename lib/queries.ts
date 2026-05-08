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

export const formsQuery = defineQuery(`
{
  "forms": *[_type == "form"] | order(index asc)[$start...$end]{
    _id,
    title,
    description,
    "file": {
      "url": file.asset->url,
      "type": file.asset->mimeType,
      "size": round(file.asset->size / (1024 * 1024), 2)
    }
  },
  "total": count(*[_type == "form"])
}
`);

export const newslettersQuery = defineQuery(`
{
  "forms": *[_type == "newsletter"] | order(index desc)[$start...$end]{
    _id,
    title,
    description,
    "file": {
      "url": file.asset->url,
      "type": file.asset->mimeType,
      "size": round(file.asset->size / (1024 * 1024), 2)
    }
  },
  "total": count(*[_type == "newsletter"])
}
`);

export const auditedAccountsQuery = defineQuery(`
{
  "forms": *[_type == "auditedAccount"] | order(index desc)[$start...$end]{
    _id,
    title,
    "file": {
      "url": file.asset->url,
      "type": file.asset->mimeType,
      "size": round(file.asset->size / (1024 * 1024), 2)
    }
  },
  "total": count(*[_type == "auditedAccount"])
}
`);

export const registeredAccountsQuery = defineQuery(`*[_type == "registeredAccounts"] {
  registeredAccounts
}`
);

export const jobOpeningsQuery = defineQuery(`*[_type == "job"] | order(_createdAt desc) {
    _id,
    title,
    description,
    tag,
    state,
    time,
    experience,
    requirements,
    applyMethod {
      applyUrl,
      applyEmail
    }
  }
`);

export const directorsQuery = defineQuery(`*[_type == "director"] | order(index asc) {
  _id, 
  name, 
  role,
  bio,
  image {
    asset -> {
      _id,
      url
    },
  },
}`)

export const managementsTeamQuery = defineQuery(`*[_type == "management"] | order(index asc) {
  _id,
  name, 
  role,
  bio,
  image {
    asset -> {
      _id,
      url
    },
  },
}`)

export const testimonialsQuery = defineQuery(`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  name,
  occupation,
  testimony
}`);

export const fundPriceQuery = defineQuery(`*[_type == "fund"] | order(_createdAt asc) {
  _id,
  date,
  fund1,
  fund2,
  fund3,
  fund4
}`);