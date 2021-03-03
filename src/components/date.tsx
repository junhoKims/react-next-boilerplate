import { DateTime } from 'luxon'

const Date = ({ dateString }) => {
  const date = DateTime.fromISO(dateString)
    .setLocale('ko')
    .toFormat('LLLL d, yyyy')

  return <time dateTime={dateString}>{date}</time>
}

export default Date
