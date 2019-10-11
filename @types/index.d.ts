// Support plugin in typescript
declare module 'gatsby-plugin-transition-link'
declare module 'react-reveal'

// Support importing SVG file in Typescript
declare module '*.svg' {
  const content: any
  export default content
}
