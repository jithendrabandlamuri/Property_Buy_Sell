module.exports = datesOfToday

// get today's date
// null -> null
function datesOfToday () {
  const ret = {}

  ret.year = String(new Date().getFullYear())
  ret.month = prefix(String(new Date().getMonth()))
  ret.day = prefix(String(new Date().getDate()))
  ret.date = [ret.year, ret.month, ret.day].join('-')

  return ret
}

// prefix a value with 0's
// str -> str
function prefix (val) {
  if (val.length < 2) return '0' + val
  return val
}
