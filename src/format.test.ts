import { describe, it, expect } from 'vitest'
import { formatText, FontColor, BackgroundColor, FontStyle } from './format'

describe('formatText', () => {
  it('should format text with bold style', () => {
    const text = 'Hello World'
    const style: FontStyle = { bold: true }
    const result = formatText(text, style)
    console.log('Bold formatted text:', result)
    expect(result).toBe('\x1b[1mHello World\x1b[0m')
  })

  it('should format text with italic style', () => {
    const text = 'Hello World'
    const style: FontStyle = { italic: true }
    const result = formatText(text, style)
    console.log('Italic formatted text:', result)
    expect(result).toBe('\x1b[3mHello World\x1b[0m')
  })

  it('should format text with underline style', () => {
    const text = 'Hello World'
    const style: FontStyle = { underline: true }
    const result = formatText(text, style)
    console.log('Underline formatted text:', result)
    expect(result).toBe('\x1b[4mHello World\x1b[0m')
  })

  it('should format text with strikethrough style', () => {
    const text = 'Hello World'
    const style: FontStyle = { strikethrough: true }
    const result = formatText(text, style)
    console.log('Strikethrough formatted text:', result)
    expect(result).toBe('\x1b[9mHello World\x1b[0m')
  })

  it('should format text with font color', () => {
    const text = 'Hello World'
    const style: FontStyle = { fontColor: FontColor.RED }
    const result = formatText(text, style)
    console.log('Font color formatted text:', result)
    expect(result).toBe('\x1b[31mHello World\x1b[0m')
  })

  it('should format text with background color', () => {
    const text = 'Hello World'
    const style: FontStyle = { backgroundColor: BackgroundColor.RED }
    const result = formatText(text, style)
    console.log('Background color formatted text:', result)
    expect(result).toBe('\x1b[41mHello World\x1b[0m')
  })

  it('should combine multiple formatting options', () => {
    const text = 'Hello World'
    const style: FontStyle = {
      bold: true,
      italic: true,
      fontColor: FontColor.RED,
      backgroundColor: BackgroundColor.BLACK,
    }
    const result = formatText(text, style)
    console.log('Multiple formatting options text:', result)
    expect(result).toBe('\x1b[1;3;31;40mHello World\x1b[0m')
  })

  it('should handle empty style object', () => {
    const text = 'Hello World'
    const style: FontStyle = {}
    const result = formatText(text, style)
    console.log('Empty style formatted text:', result)
    expect(result).toBe('\x1b[mHello World\x1b[0m')
  })
})