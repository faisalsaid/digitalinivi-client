import { Cloudinary } from '@cloudinary/url-gen';

export const cloudImage = new Cloudinary({
  cloud: {
    cloudName: 'bd-studio',
  },
});
