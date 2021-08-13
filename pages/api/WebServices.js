export const BASE_URL = "https://blog.objectual.pk/wp-json/wp/v2/";
export const BASE_URL_CONTACT = "https://blog.objectual.pk/wp-json/";

export const BLOG_POST = (perPage) => `${BASE_URL}posts?per_page=${perPage}`;
export const MEDIA_POST = (perPage) => `${BASE_URL}medianews?per_page=${perPage}`;
export const CONTACT = `${BASE_URL_CONTACT}sendMail`;
