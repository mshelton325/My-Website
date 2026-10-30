import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const dist = 'dist';
const base = 'https://mattshelton.co';
const homepage = await readFile(join(dist, 'index.html'), 'utf8');

// Keep the home page and all existing SPA routes intact. These HTML shells
// add correct initial metadata for major public routes without changing
// their React content or requiring a new rendering framework.
const pages = {
  '/about': ['About Matt Shelton | Practical Flooring Systems', 'Meet Matt Shelton and learn how nearly two decades in flooring shaped his approach to better processes, people development and sustainable leadership.'],
  '/results-feedback': ['Results & Feedback | Matt Shelton', 'Real-world flooring business results, professional endorsements and feedback from Matt Shelton\'s January 2026 CCA Education Day session.'],
  '/insights-resources': ['Free Flooring Business Videos & Tools | Matt Shelton', 'Watch practical flooring business teaching videos and access free sales, follow-up, management and process improvement resources.'],
  '/speaking': ['Flooring Industry Speaking & Education | Matt Shelton', 'Explore Matt Shelton\'s practical flooring industry sessions on sales conversion, people development, systems and operating clarity.'],
  '/work-with-matt': ['Work With Matt Shelton | Flooring Business Guidance', 'Explore practical flooring business guidance, learning resources and options for help with sales processes, people development and operating systems.'],
  '/ask': ['Ask Matt | Questions & Topic Ideas', 'Share a question, real-world challenge or topic idea with Matt Shelton to help shape practical videos, tools and conversations.'],
  '/education-day': ['Gold Beneath Your Feet | Free CCA Resources', 'Eight free downloadable tools from Matt Shelton\'s January 2026 CCA Education Day session to improve conversion, follow-up and operating clarity.'],
  '/diagnostic': ['Flooring Systems Diagnostic | Matt Shelton', 'Explore a flooring business diagnostic designed to identify opportunities to improve processes, clarity and operational performance.'],
  '/diagnostic/confirmation': ['Diagnostic Confirmation | Matt Shelton', 'Information about the next steps after submitting a flooring systems diagnostic.'],
};

function escapeHtml(s) {
  return s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function setTag(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error('Missing HTML metadata tag: ' + label);
  return html.replace(regex, replacement);
}

for (const [route, [title, description]] of Object.entries(pages)) {
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
console.log('Generated ' + Object.keys(pages).length + ' route-specific HTML metadata shells.');
