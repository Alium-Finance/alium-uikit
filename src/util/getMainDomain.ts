const getMainDomain = (): string => {
  const host = window.location.host || 'alium.finance'
  const hostArray = host.split('.')
  if (hostArray.length === 1) return host
  return `${hostArray[hostArray.length - 2]}.${hostArray[hostArray.length - 1]}`
}

export default getMainDomain
