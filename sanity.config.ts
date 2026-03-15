import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { table } from '@sanity/table'
import { codeInput } from '@sanity/code-input'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  name: 'brahmin-solutions',
  title: 'Brahmin Solutions Blog',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "post"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
          ]),
    }),
    visionTool(),
    table(),
    codeInput(),
    unsplashImageAsset(),
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
})
