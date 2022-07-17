export const getAllProjects = `*[_type == "project"]|order( publishedAt desc)
{"id":_id, title, "slug":slug.current, category,  status, coverPhoto, publishedAt, "createdAt":_createdAt}`;

//For indivudial projects

export const getAllProjectSlugs = `*[_type == "project" && defined(slug.current)][].slug.current`;

export const getProjectDataBySlug = `*[_type == "project" && slug.current == $slug][0]
{"id":_id, title, "slug":slug.current, category, assignment, client, status, criticality, reference, coverPhoto, publishedAt, "createdAt":_createdAt}`;

export const getOtherProjects = `*[_type == "project" && slug.current != $slug]|order( publishedAt desc)
{"id":_id, title, "slug":slug.current, category,  status, coverPhoto, publishedAt, "createdAt":_createdAt}`;
