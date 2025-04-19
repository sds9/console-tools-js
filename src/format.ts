export enum FontColor {
  BLACK = '30',
  RED = '31',
}

export enum BackgroundColor {
  BLACK = '40',
  RED = '41',
}
export type FontStyle = {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  fontColor?: FontColor
  backgroundColor?: BackgroundColor
  strikethrough?: boolean
}

export const formatText = (text: string, style: FontStyle): string => {
  const styles = []
  if (style.bold) styles.push('1')
  if (style.italic) styles.push('3')
  if (style.underline) styles.push('4')
  if (style.strikethrough) styles.push('9')
  if (style.fontColor) styles.push(style.fontColor)
  if (style.backgroundColor) styles.push(style.backgroundColor)

  const formattedText = `\x1b[${styles.join(';')}m${text}\x1b[0m`
  console.log('Formatted text:', formattedText)
  return formattedText
}