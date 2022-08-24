import Image from 'next/image'
import Link from 'next/link'
import { DocumentDownloadIcon } from '@heroicons/react/outline'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    if (asset.contentType === 'application/pdf') {
      console.log(asset)
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
      console.log(asset)
      return (
        <figure>
          <picture>
            <source srcSet={asset.url} />
            <img
              src={asset.url}
              alt={asset.description}
              className="w-full rounded-lg"
            />
          </picture>
        </figure>
      )
    }
  }
  return null
}
