/**
 * Represents an Instagram post.
 */
export interface InstagramPost {
  /**
   * The URL of the post's image.
   */
  imageUrl: string;
  /**
   * The URL of the post on Instagram.
   */
  postUrl: string;
  /**
   * The caption of the post.
   */
  caption: string;
}

/**
 * Asynchronously retrieves the latest Instagram posts.
 *
 * @returns A promise that resolves to an array of InstagramPost objects.
 */
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  // TODO: Implement this by calling the Instagram API.

  return [
    {
      imageUrl: 'https://example.com/image1.jpg',
      postUrl: 'https://instagram.com/p/1234567890',
      caption: 'Check out our new superfood blend!',
    },
    {
      imageUrl: 'https://example.com/image2.jpg',
      postUrl: 'https://instagram.com/p/0987654321',
      caption: 'Fuel your body with NourishVita.',
    },
  ];
}
