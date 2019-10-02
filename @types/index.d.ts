// Support plugin in typescript
declare module 'gatsby-plugin-transition-link'

// Support importing SVG file in Typescript
declare module '*.svg' {
  const content: any
  export default content
}
