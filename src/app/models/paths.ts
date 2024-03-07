export interface Path {
  name: string;
  path: string;
}
export const Paths = [
  { name: 'home', path: '/home' },
  { name: 'blog', path: '/blog' },
  { name: 'resume', path: '/resume' },
] as const;
