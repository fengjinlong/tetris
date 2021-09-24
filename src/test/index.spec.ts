import { foo } from './index'
test('happy', () => {
  expect(foo()).toBe(1)
})