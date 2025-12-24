/**
 * Get the base URL from Vite's environment
 * This ensures images work correctly with GitHub Pages base path
 */
export const getImagePath = (path: string): string => {
  // import.meta.env.BASE_URL already includes the trailing slash
  const baseUrl = import.meta.env.BASE_URL;
  // Remove leading slash from path if present, then combine with base URL
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${cleanPath}`;
};

