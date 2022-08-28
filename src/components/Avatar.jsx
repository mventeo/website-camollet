import ContentfulImage from '@/components/contentful/contentful-image'
import { format } from 'date-fns'
import { ca } from 'date-fns/locale'

export function Avatar({ name, picture, date }) {
  return (
    <div className="flex items-center">
      <div className="relative mr-4 h-10 w-10 sm:h-12 sm:w-12">
        <ContentfulImage
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div>
        <span className="text-sm font-semibold uppercase sm:text-base">
          {name}
        </span>
        <br />
        <div className="text-xs capitalize sm:-mt-1  sm:text-sm">
          <span>
            {format(new Date(date), 'EEEE, dd LLLL  yyyy', {
              locale: ca,
            })}
          </span>
        </div>
      </div>
    </div>
  )
}
