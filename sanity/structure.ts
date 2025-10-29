import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('director').title('Directors'),
      S.documentTypeListItem('slider').title('Sliders'),
      S.documentTypeListItem('form').title('Forms'),
      S.documentTypeListItem('job').title('Job Opening'),
      S.documentTypeListItem('management').title('Managements'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
    ])
