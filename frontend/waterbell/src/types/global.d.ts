// // src/types/global.d.ts
// declare global {
//     interface Window {
//       kakao: any;
//     }
//   }

declare module '*.png' {
  const value: string
  export default png
}

declare module 'chart.js/auto' {
  export default Chart
}
