import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'xn7ub1mg',
  dataset: 'production',
  useCdn: import.meta.env.PROD || false,
  apiVersion: '2024-01-01',
})