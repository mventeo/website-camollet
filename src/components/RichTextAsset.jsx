import Image from 'next/image'
import Link from 'next/link'
import { DocumentDownloadIcon } from '@heroicons/react/outline'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    if (asset.contentType === 'application/pdf') {
      return (
        <>
          <Link href={asset.url} target="_blank">
            <div className="flex text-red-500">
              <DocumentDownloadIcon className="m-l2 h-8" />
              <span className="mt-1">{asset.description}</span>
            </div>
          </Link>
        </>
      )
    } else {
      return (
        <div className="flex justify-center">
          <div className="relative h-96 w-96 ">
            <Image
              src={asset.url}
              alt={asset.description}
              className="rounded-lg"
              layout="fill"
              priority="1"
            />
          </div>
        </div>
      )
    }
  }
  return null
}
