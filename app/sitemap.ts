import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const baseUrl = 'https://www.brahmin-solutions.com'

// Priority mapping by route pattern
function getPriority(route: string): number {
  if (route === '/') return 1.0
  if (['/pricing', '/demo', '/mrp-software', '/inventory-management-software', '/production-planning-software', '/manufacturing-erp', '/lot-tracking-software', '/bom-software'].includes(route)) return 0.9
  if (route === '/features') return 0.8
  if (route.startsWith('/features/') || route.startsWith('/industries') || route === '/integrations' || route === '/blog') return 0.7
  if (route.startsWith('/compare/')) return 0.6
  return 0.6
}

function getChangeFrequency(route: string): 'weekly' | 'monthly' {
  if (route === '/' || route === '/blog') return 'weekly'
  return 'monthly'
}

// Excluded routes that shouldn't appear in sitemap
const excludedRoutes = new Set(['/studio', '/not-found'])

function discoverPages(dir: string, basePath: string = ''): string[] {
  const routes: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const fullPath = path.join(dir, entry.name)
    const routePath = `${basePath}/${entry.name}`

    // Skip dynamic routes, internal folders, and excluded routes
    if (entry.name.startsWith('[') || entry.name.startsWith('_')) continue
    if (excludedRoutes.has(routePath)) continue

    // Check if this directory has a page.tsx
    const hasPage = fs.existsSync(path.join(fullPath, 'page.tsx')) || fs.existsSync(path.join(fullPath, 'page.ts'))

    if (hasPage) {
      routes.push(routePath)
    }

    // Recurse into subdirectories
    routes.push(...discoverPages(fullPath, routePath))
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app')

  // Start with homepage (app/page.tsx)
  const routes = ['/']

  // Discover all page routes
  routes.push(...discoverPages(appDir))

  return routes.map((route) => ({
    url: `${baseUrl}${route === '/' ? '' : route}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }))
}
