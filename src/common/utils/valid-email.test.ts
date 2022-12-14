import validEmail from './valid-email'

test('validEmail', () => {
  expect(validEmail('test@mail.com')).toBeTruthy()
  expect(validEmail('testmail.com')).toBeFalsy()
})
