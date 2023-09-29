export function dynamicMaskCEP(cep: string) {
  let addressValue = cep.trim()

  addressValue = addressValue.replace(/\D/g, '')
  addressValue = addressValue.replace(/(\d{5})(\d)/, '$1 - $2')

  return addressValue.substring(0, 11)
}
