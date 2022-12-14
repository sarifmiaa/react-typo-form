function validEmail(email: string): boolean {
  const validatorRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/

  if (validatorRegex.test(email)) return true

  return false
}

export default validEmail
