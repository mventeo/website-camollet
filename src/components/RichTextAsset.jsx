import Image from 'next/image'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
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

  return null
}
