import { describe, it, expect } from 'vitest'
import * as indexExports from '.'
import * as formatExports from './format'

describe('index exports', () => {
  it('should export all items from format.ts', () => {
    // Get all keys from both modules
    const indexKeys = Object.keys(indexExports)
    const formatKeys = Object.keys(formatExports)
    
    // Verify that all format keys exist in index exports
    formatKeys.forEach(key => {
      expect(indexExports).toHaveProperty(key)
    })
    
    // Verify count of exports matches
    expect(indexKeys.length).toBe(formatKeys.length)
  })
  
  it('should export FontColor enum', () => {
    expect(indexExports).toHaveProperty('FontColor')
    expect(indexExports.FontColor).toEqual(formatExports.FontColor)
    expect(indexExports.FontColor.BLACK).toBe('30')
    expect(indexExports.FontColor.RED).toBe('31')
  })
  
  it('should export BackgroundColor enum', () => {
    expect(indexExports).toHaveProperty('BackgroundColor')
    expect(indexExports.BackgroundColor).toEqual(formatExports.BackgroundColor)
    expect(indexExports.BackgroundColor.BLACK).toBe('40')
    expect(indexExports.BackgroundColor.RED).toBe('41')
  })
  
  it('should export formatText function', () => {
    expect(indexExports).toHaveProperty('formatText')
    expect(typeof indexExports.formatText).toBe('function')
    
    // Test that the function works correctly when imported from index
    const text = 'Test Text'
    const style = { bold: true }
    const result = indexExports.formatText(text, style)
    expect(result).toBe('\x1b[1mTest Text\x1b[0m')
  })
  
  it('should be able to use FontStyle type from index exports', () => {
    // Create a compliant FontStyle object
    const style: indexExports.FontStyle = {
      bold: true,
      italic: false,
      underline: true,
      fontColor: indexExports.FontColor.RED,
      backgroundColor: indexExports.BackgroundColor.BLACK
    }
    
    // If this compiles, it means the FontStyle type is exported correctly
    expect(style).toHaveProperty('bold', true)
    expect(style).toHaveProperty('fontColor', '31')
  })
})