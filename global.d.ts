declare module '*.less'
declare namespace JSX {
  interface IntrinsicElements {
    marquee: React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement>
  }
}
