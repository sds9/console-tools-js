/**
 * Unit tests for the text formatting utilities
 * Tests different style combinations and verifies ANSI escape code output
 */
import { describe, it, expect } from 'vitest'
import { formatText, FontColor, BackgroundColor, FontStyle } from './format'

describe('formatText', () => {
  /**
   * Test for bold text formatting
   * Verifies that the bold style flag produces the correct ANSI code
   */
  it('should format text with bold style', () => {
    const text = 'Hello World'
    const style: FontStyle = { bold: true }
    const result = formatText(text, style)
    console.log('Bold formatted text:', result)
    expect(result).toBe('\x1b[1mHello World\x1b[0m')
  })

  /**
   * Test for italic text formatting
   * Verifies that the italic style flag produces the correct ANSI code
   */
  it('should format text with italic style', () => {
    const text = 'Hello World'
    const style: FontStyle = { italic: true }
    const result = formatText(text, style)
    console.log('Italic formatted text:', result)
    expect(result).toBe('\x1b[3mHello World\x1b[0m')
  })

  /**
   * Test for underlined text formatting
   * Verifies that the underline style flag produces the correct ANSI code
   */
  it('should format text with underline style', () => {
    const text = 'Hello World'
    const style: FontStyle = { underline: true }
    const result = formatText(text, style)
    console.log('Underline formatted text:', result)
    expect(result).toBe('\x1b[4mHello World\x1b[0m')
  })

  /**
   * Test for strikethrough text formatting
   * Verifies that the strikethrough style flag produces the correct ANSI code
   */
  it('should format text with strikethrough style', () => {
    const text = 'Hello World'
    const style: FontStyle = { strikethrough: true }
    const result = formatText(text, style)
    console.log('Strikethrough formatted text:', result)
    expect(result).toBe('\x1b[9mHello World\x1b[0m')
  })

  /**
   * Test for font color formatting
   * Verifies that applying a font color produces the correct ANSI code
   */
  it('should format text with font color', () => {
    const text = 'Hello World'
    const style: FontStyle = { fontColor: FontColor.RED }
    const result = formatText(text, style)
    console.log('Font color formatted text:', result)
    expect(result).toBe('\x1b[31mHello World\x1b[0m')
  })

  /**
   * Test for background color formatting
   * Verifies that applying a background color produces the correct ANSI code
   */
  it('should format text with background color', () => {
    const text = 'Hello World'
    const style: FontStyle = { backgroundColor: BackgroundColor.RED }
    const result = formatText(text, style)
    console.log('Background color formatted text:', result)
    expect(result).toBe('\x1b[41mHello World\x1b[0m')
  })

  /**
   * Test for combining multiple formatting options
   * Verifies that multiple style attributes combine correctly in a single ANSI code
   */
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

  /**
   * Test for handling empty style object
   * Verifies that an empty style object still produces valid ANSI formatting
   */
  it('should handle empty style object', () => {
    const text = 'Hello World'
    const style: FontStyle = {}
    const result = formatText(text, style)
    console.log('Empty style formatted text:', result)
    expect(result).toBe('\x1b[mHello World\x1b[0m')
  })

  /**
   * Tests for standard font colors
   * Verifies that each standard font color produces the correct ANSI code
   */
  describe('Standard Font Colors', () => {
    it('should format text with BLACK font color', () => {
      const result = formatText('BLACK text', { fontColor: FontColor.BLACK })
      expect(result).toBe('\x1b[30mBLACK text\x1b[0m')
    })

    it('should format text with RED font color', () => {
      const result = formatText('RED text', { fontColor: FontColor.RED })
      expect(result).toBe('\x1b[31mRED text\x1b[0m')
    })

    it('should format text with GREEN font color', () => {
      const result = formatText('GREEN text', { fontColor: FontColor.GREEN })
      expect(result).toBe('\x1b[32mGREEN text\x1b[0m')
    })

    it('should format text with YELLOW font color', () => {
      const result = formatText('YELLOW text', { fontColor: FontColor.YELLOW })
      expect(result).toBe('\x1b[33mYELLOW text\x1b[0m')
    })

    it('should format text with BLUE font color', () => {
      const result = formatText('BLUE text', { fontColor: FontColor.BLUE })
      expect(result).toBe('\x1b[34mBLUE text\x1b[0m')
    })

    it('should format text with MAGENTA font color', () => {
      const result = formatText('MAGENTA text', { fontColor: FontColor.MAGENTA })
      expect(result).toBe('\x1b[35mMAGENTA text\x1b[0m')
    })

    it('should format text with CYAN font color', () => {
      const result = formatText('CYAN text', { fontColor: FontColor.CYAN })
      expect(result).toBe('\x1b[36mCYAN text\x1b[0m')
    })

    it('should format text with WHITE font color', () => {
      const result = formatText('WHITE text', { fontColor: FontColor.WHITE })
      expect(result).toBe('\x1b[37mWHITE text\x1b[0m')
    })
  })

  /**
   * Tests for bright font colors
   * Verifies that each bright font color produces the correct ANSI code
   */
  describe('Bright Font Colors', () => {
    it('should format text with BRIGHT_BLACK font color', () => {
      const result = formatText('GREY text', { fontColor: FontColor.GREY })
      expect(result).toBe('\x1b[90mGREY text\x1b[0m')
    })

    it('should format text with BRIGHT_RED font color', () => {
      const result = formatText('BRIGHT RED text', { fontColor: FontColor.BRIGHT_RED })
      expect(result).toBe('\x1b[91mBRIGHT RED text\x1b[0m')
    })

    it('should format text with BRIGHT_GREEN font color', () => {
      const result = formatText('BRIGHT GREEN text', { fontColor: FontColor.BRIGHT_GREEN })
      expect(result).toBe('\x1b[92mBRIGHT GREEN text\x1b[0m')
    })

    it('should format text with BRIGHT_YELLOW font color', () => {
      const result = formatText('BRIGHT YELLOW text', { fontColor: FontColor.BRIGHT_YELLOW })
      expect(result).toBe('\x1b[93mBRIGHT YELLOW text\x1b[0m')
    })

    it('should format text with BRIGHT_BLUE font color', () => {
      const result = formatText('BRIGHT BLUE text', { fontColor: FontColor.BRIGHT_BLUE })
      expect(result).toBe('\x1b[94mBRIGHT BLUE text\x1b[0m')
    })

    it('should format text with BRIGHT_MAGENTA font color', () => {
      const result = formatText('BRIGHT MAGENTA text', { fontColor: FontColor.BRIGHT_MAGENTA })
      expect(result).toBe('\x1b[95mBRIGHT MAGENTA text\x1b[0m')
    })

    it('should format text with BRIGHT_CYAN font color', () => {
      const result = formatText('BRIGHT CYAN text', { fontColor: FontColor.BRIGHT_CYAN })
      expect(result).toBe('\x1b[96mBRIGHT CYAN text\x1b[0m')
    })

    it('should format text with BRIGHT_WHITE font color', () => {
      const result = formatText('BRIGHT WHITE text', { fontColor: FontColor.BRIGHT_WHITE })
      expect(result).toBe('\x1b[97mBRIGHT WHITE text\x1b[0m')
    })
  })

  /**
   * Tests for standard background colors
   * Verifies that each standard background color produces the correct ANSI code
   */
  describe('Standard Background Colors', () => {
    it('should format text with BLACK background color', () => {
      const result = formatText('BLACK background', { backgroundColor: BackgroundColor.BLACK })
      expect(result).toBe('\x1b[40mBLACK background\x1b[0m')
    })

    it('should format text with RED background color', () => {
      const result = formatText('RED background', { backgroundColor: BackgroundColor.RED })
      expect(result).toBe('\x1b[41mRED background\x1b[0m')
    })

    it('should format text with GREEN background color', () => {
      const result = formatText('GREEN background', { backgroundColor: BackgroundColor.GREEN })
      expect(result).toBe('\x1b[42mGREEN background\x1b[0m')
    })

    it('should format text with YELLOW background color', () => {
      const result = formatText('YELLOW background', { backgroundColor: BackgroundColor.YELLOW })
      expect(result).toBe('\x1b[43mYELLOW background\x1b[0m')
    })

    it('should format text with BLUE background color', () => {
      const result = formatText('BLUE background', { backgroundColor: BackgroundColor.BLUE })
      expect(result).toBe('\x1b[44mBLUE background\x1b[0m')
    })

    it('should format text with MAGENTA background color', () => {
      const result = formatText('MAGENTA background', { backgroundColor: BackgroundColor.MAGENTA })
      expect(result).toBe('\x1b[45mMAGENTA background\x1b[0m')
    })

    it('should format text with CYAN background color', () => {
      const result = formatText('CYAN background', { backgroundColor: BackgroundColor.CYAN })
      expect(result).toBe('\x1b[46mCYAN background\x1b[0m')
    })

    it('should format text with WHITE background color', () => {
      const result = formatText('WHITE background', { backgroundColor: BackgroundColor.WHITE })
      expect(result).toBe('\x1b[47mWHITE background\x1b[0m')
    })
  })

  /**
   * Tests for bright background colors
   * Verifies that each bright background color produces the correct ANSI code
   */
  describe('Bright Background Colors', () => {
    it('should format text with BRIGHT_BLACK background color', () => {
      const result = formatText('GREY background', { backgroundColor: BackgroundColor.BRIGHT_BLACK })
      expect(result).toBe('\x1b[100mGREY background\x1b[0m')
    })

    it('should format text with BRIGHT_RED background color', () => {
      const result = formatText('BRIGHT RED background', { backgroundColor: BackgroundColor.BRIGHT_RED })
      expect(result).toBe('\x1b[101mBRIGHT RED background\x1b[0m')
    })

    it('should format text with BRIGHT_GREEN background color', () => {
      const result = formatText('BRIGHT GREEN background', { backgroundColor: BackgroundColor.BRIGHT_GREEN })
      expect(result).toBe('\x1b[102mBRIGHT GREEN background\x1b[0m')
    })

    it('should format text with BRIGHT_YELLOW background color', () => {
      const result = formatText('BRIGHT YELLOW background', { backgroundColor: BackgroundColor.BRIGHT_YELLOW })
      expect(result).toBe('\x1b[103mBRIGHT YELLOW background\x1b[0m')
    })

    it('should format text with BRIGHT_BLUE background color', () => {
      const result = formatText('BRIGHT BLUE background', { backgroundColor: BackgroundColor.BRIGHT_BLUE })
      expect(result).toBe('\x1b[104mBRIGHT BLUE background\x1b[0m')
    })

    it('should format text with BRIGHT_MAGENTA background color', () => {
      const result = formatText('BRIGHT MAGENTA background', { backgroundColor: BackgroundColor.BRIGHT_MAGENTA })
      expect(result).toBe('\x1b[105mBRIGHT MAGENTA background\x1b[0m')
    })

    it('should format text with BRIGHT_CYAN background color', () => {
      const result = formatText('BRIGHT CYAN background', { backgroundColor: BackgroundColor.BRIGHT_CYAN })
      expect(result).toBe('\x1b[106mBRIGHT CYAN background\x1b[0m')
    })

    it('should format text with BRIGHT_WHITE background color', () => {
      const result = formatText('BRIGHT WHITE background', { backgroundColor: BackgroundColor.BRIGHT_WHITE })
      expect(result).toBe('\x1b[107mBRIGHT WHITE background\x1b[0m')
    })
  })
})