import ContentfulImage from '@/components/contentful/contentful-image'
import { format } from 'date-fns'
import { ca } from 'date-fns/locale'

export function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-12 w-12">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div>
        <span className="text-base font-semibold uppercase">{name}</span>
        <br />
        <span>
          {format(new Date(date), 'EEEE, dd LLLL  yyyy', {
            locale: ca,
          })}
        </span>
      </div>
      <div className="ml-16 -mt-2 text-sm capitalize"></div>
    </div>
  )
}
