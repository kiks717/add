import{ css} from 'styled-components'
export const mobile = (props) => {
    return css` 
       @media only screen and (max-width:380px){
        ${props}
    }
  `
}
export const medium = (props) => {
  return css`
    @media only screen and (max-width:650px){
      ${props}
  }
  `
}
export const big = (props) => {
  return css`
    @media only screen and (max-width:1150px){
      ${props}
  }
  `
}
export const bigger = (props) => {
  return css`
    @media only screen and (max-width:2000px){
      ${props}
  }
  `
}
export const iphoneXR = (props) => {
  return css`
  @media only screen 
  and (min-device-width : 414px) 
  and (max-device-height : 896px){
    ${props}
  }
  `
}