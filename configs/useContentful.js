import { createClient } from 'contentful';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

export const fetchData = async (contentType) => {
  try {
    const data = await client.getEntries({
      content_type: contentType,
      select: 'fields',
    });
    const sanitizedEntries = data.items.map((item) => {
      return { ...item.fields };
    });
    return sanitizedEntries;
  } catch (error) {
    return error;
  }
};
