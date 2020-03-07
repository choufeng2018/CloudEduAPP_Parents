export const parseFormData = data => {
  const form = new FormData()
  Object.keys(data).forEach(key => {
    console.log(key, data[key])
    form.append(key, data[key])
  })
  console.log(form)
  return form
}

export const parseJsonData = data => {
  const json = {}
  data.forEach((value, key) => {
    json[key] = value
  })
  return json
}
