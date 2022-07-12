export const getAllProjects = `*[_type == "project"]|order(_updatedAt desc)
{"id":_id, title, category, assignment, client, status, criticality, reference, coverPhoto, publishedAt, "createdAt":_createdAt}`;
