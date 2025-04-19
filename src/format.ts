/**
 * Terminal text formatting utilities
 * Provides enums and functions to apply ANSI color codes and styles to terminal text
 */

/**
 * ANSI font color codes for terminal text formatting
 * Values are string representations of ANSI color codes (30-37 for standard colors, 90-97 for bright colors)
 */
export enum FontColor {
  BLACK = '30',
  RED = '31',
  GREEN = '32',
  YELLOW = '33',
  BLUE = '34',
  MAGENTA = '35',
  CYAN = '36',
  WHITE = '37',
  GREY = '90',
  BRIGHT_RED = '91',
  BRIGHT_GREEN = '92',
  BRIGHT_YELLOW = '93',
  BRIGHT_BLUE = '94',
  BRIGHT_MAGENTA = '95',
  BRIGHT_CYAN = '96',
  BRIGHT_WHITE = '97',
}

/**
 * ANSI background color codes for terminal text formatting
 * Values are string representations of ANSI color codes (40-47 for standard colors, 100-107 for bright colors)
 */
export enum BackgroundColor {
  BLACK = '40',
  RED = '41',
  GREEN = '42',
  YELLOW = '43',
  BLUE = '44',
  MAGENTA = '45',
  CYAN = '46',
  WHITE = '47',
  BRIGHT_BLACK = '100',
  BRIGHT_RED = '101',
  BRIGHT_GREEN = '102',
  BRIGHT_YELLOW = '103',
  BRIGHT_BLUE = '104',
  BRIGHT_MAGENTA = '105',
  BRIGHT_CYAN = '106',
  BRIGHT_WHITE = '107',
}

/**
 * Configuration interface for text styling options
 * All properties are optional and can be combined for complex styling
 */
export type FontStyle = {
  /** Whether the text should be bold */
  bold?: boolean
  /** Whether the text should be italic */
  italic?: boolean
  /** Whether the text should be underlined */
  underline?: boolean
  /** The color of the text (from FontColor enum) */
  fontColor?: FontColor
  /** The background color of the text (from BackgroundColor enum) */
  backgroundColor?: BackgroundColor
  /** Whether the text should have strikethrough formatting */
  strikethrough?: boolean
}

/**
 * @description
 * Applies ANSI formatting codes to the provided text based on the given style options
 * 
 * The function combines different ANSI escape codes to format text with various styles
 * such as color, background color, bold, italic, underline, and strikethrough.
 * @remarks
 * ANSI escape codes work in most terminal environments including macOS Terminal, 
 * Windows Terminal, and various terminal emulators in code editors.
 * 
 * @param text - The text content to be formatted
 * @param style - The style configuration to apply to the text
 * @returns Formatted string with ANSI escape codes
 * 
 * @example
 * ```typescript
 * // Format text with red font on black background
 * const errorMessage = formatText('Error!', {
 *   fontColor: FontColor.RED,
 *   backgroundColor: BackgroundColor.BLACK,
 *   bold: true
 * });
 * 
 * // Format success message in green
 * const successMessage = formatText('Operation successful', {
 *   fontColor: FontColor.GREEN,
 *   italic: true
 * });
 * 
 * // Format warning with bright yellow
 * const warningMessage = formatText('Warning: Low disk space', {
 *   fontColor: FontColor.BRIGHT_YELLOW,
 *   underline: true
 * });
 * 
 * // Combine multiple styles
 * const importantNote = formatText('IMPORTANT NOTE', {
 *   bold: true,
 *   underline: true,
 *   fontColor: FontColor.WHITE,
 *   backgroundColor: BackgroundColor.BLUE
 * });
 * ```
 * 
 * @see {@link FontColor} for available font color options
 * @see {@link BackgroundColor} for available background color options
 * @see {@link FontStyle} for the complete style configuration interface
 */
export const formatText = (text: string, style: FontStyle): string => {
  const styles = []
  // Add each enabled style code to the styles array
  if (style.bold) styles.push('1')
  if (style.italic) styles.push('3')
  if (style.underline) styles.push('4')
  if (style.strikethrough) styles.push('9')
  if (style.fontColor) styles.push(style.fontColor)
  if (style.backgroundColor) styles.push(style.backgroundColor)

  // Format the text with ANSI codes and reset at the end with \x1b[0m
  const formattedText = `\x1b[${styles.join(';')}m${text}\x1b[0m`
  console.log('Formatted text:', formattedText)
  return formattedText
}