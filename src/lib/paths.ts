export function withBase(path: string = '/'): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  if (!path || path === '/') return base || '/';
  const rest = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rest}`;
}
