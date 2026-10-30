import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'xn7ub1mg',
  dataset: 'production',
  useCdn: import.meta.env.PROD || false,
  apiVersion: '2024-01-01',
})

const token = import.meta.env.SANITY_API_TOKEN || (typeof import.meta.env !== 'undefined' ? import.meta.env.SANITY_API_TOKEN : undefined)

export const sanityWriteClient = createClient({
  projectId: 'xn7ub1mg',
  dataset: 'production',
  token,
  useCdn: false,
  apiVersion: '2024-01-01',
})
