import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const { docs: data } = await payload.find({
    collection: 'test',
    pagination: false,
    select: {
      id: true,
      productType: true,
      productTypeRadio: true,
    },
  })
  console.log(data)

  return Response.json(data)
}
