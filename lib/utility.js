export const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) return

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }

  const date = new Date(dateTimeString)
  const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(
    date
  )

  return formattedDateTime
}
