import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { SEO_PAGES } from '../src/seoPages.js';

const dist = 'dist';
const base = 'https://mattshelton.co';
const homepage = await readFile(join(dist, 'index.html'), 'utf8');

// Keep the home page and all existing SPA routes intact. These HTML shells
// add correct initial metadata for major public routes without changing
// their React content or requiring a new rendering framework.
function escapeHtml(s) {
  return s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error('Missing HTML metadata tag: ' + label);
  return html.replace(regex, replacement);
}

for (const [route, { title, description }] of Object.entries(SEO_PAGES)) {
  if (route === '/') continue;
  const url = base + route;
  let html = homepage;
  html = setTag(html, /<title>[^<]*<\/title>/, '<title>' + escapeHtml(title) + '</title>', 'title');
  html = setTag(html, /<meta name="description" content="[^"]*"\s*\/>/, '<meta name="description" content="' + escapeHtml(description) + '" />', 'description');
  html = setTag(html, /<meta property="og:title" content="[^"]*"\s*\/>/, '<meta property="og:title" content="' + escapeHtml(title) + '" />', 'og:title');
  html = setTag(html, /<meta property="og:description" content="[^"]*"\s*\/>/, '<meta property="og:description" content="' + escapeHtml(description) + '" />', 'og:description');
  html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/>/, '<meta property="og:url" content="' + escapeHtml(url) + '" />', 'og:url');
  html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/>/, '<link rel="canonical" href="' + escapeHtml(url) + '" />', 'canonical');
  if (route === '/diagnostic/confirmation') html = html.replace('</head>', '<meta name="robots" content="noindex,follow" />\n  </head>');
  const filepath = join(dist, 'seo', route.slice(1) + '.html');
  await mkdir(dirname(filepath), { recursive: true });
  await writeFile(filepath, html, 'utf8');
}
console.log('Generated ' + Object.keys(SEO_PAGES).length - 1 + ' route-specific HTML metadata shells.');
