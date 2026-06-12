import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'xn7ub1mg',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})