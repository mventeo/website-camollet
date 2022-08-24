import Link from 'next/link'
import { CameraIcon } from '@heroicons/react/outline'

export function PhotoBy({ author, url }) {
  return (
    <div className="absolute bottom-0 flex w-full bg-white opacity-50">
      <CameraIcon className="m-2 h-8"></CameraIcon>
      <Link
        rel="noopener noreferrer"
        to={url}
        className="mt-3 text-base italic hover:font-bold"
        href="https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >
        <span>{author}</span>
      </Link>
    </div>
  )
}
