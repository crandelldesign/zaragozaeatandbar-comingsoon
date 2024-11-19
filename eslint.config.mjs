import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  // options here
})
.prepend(
  // ...Prepend some flat configs in front
)
// Override some rules in a specific config, based on their name
.override('nuxt/typescript', {
  rules: {
    "semi": ["error", "always"] 
  },
})
// ...you can chain more operations as needed
