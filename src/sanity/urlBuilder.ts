import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source: ImageMetadata) {
  return imageBuilder.image(source);
}
