/**
 * Types for the table generator
 */
import { formatText, FontStyle, FontColor } from './format';

export interface TableColumn {
  header: string;
  key: string;
  color?: FontColor;
  width?: number;
}

export interface TableOptions {
  headerColor?: FontColor;
  padding?: number;
  border?: boolean;
}

/**
 * Creates a formatted table for console output
 * 
 * @param data Array of objects containing the data to display
 * @param columns Column configuration with header text, data key, and optional color
 * @param options Table display options for padding, header color, etc.
 * @returns Formatted table string ready for console output
 * 
 * @example
 * ```
 * const data = [
 *   { id: 1, name: 'Alice', status: 'active' },
 *   { id: 2, name: 'Bob', status: 'inactive' }
 * ];
 * 
 * const columns = [
 *   { header: 'ID', key: 'id' },
 *   { header: 'Name', key: 'name' },
 *   { header: 'Status', key: 'status', color: FontColor.GREEN }
 * ];
 * 
 * console.log(createTable(data, columns, { headerColor: FontColor.CYAN, padding: 2 }));
 * ```
 */
export function createTable(
  data: Record<string, any>[],
  columns: TableColumn[],
  options: TableOptions = {}
): string {
  const {
    headerColor = FontColor.CYAN, // Default cyan color
    padding = 2,
    border = false
  } = options;
  
  // Calculate column widths
  const columnWidths: Record<string, number> = {};
  
  // Initialize with header lengths
  columns.forEach(col => {
    columnWidths[col.key] = col.width || Math.max(
      col.header.length,
      ...data.map(row => String(row[col.key] || '').length)
    );
  });
  
  // Generate the header row
  let result = '';
  
  // Border top if requested
  if (border) {
    result += '┌' + columns.map(col => '─'.repeat(columnWidths[col.key] + padding * 2)).join('┬') + '┐\n';
  }
  
  // Header row
  const headerRow = columns.map(col => {
    const headerText = col.header;
    const padding1 = ' '.repeat(padding);
    const padding2 = ' '.repeat(columnWidths[col.key] - headerText.length + padding);
    return `${padding1}${formatText(headerText, { fontColor: headerColor })}${padding2}`;
  }).join(border ? '│' : '');
  
  if (border) {
    result += '│' + headerRow + '│\n';
    // Border between header and data
    result += '├' + columns.map(col => '─'.repeat(columnWidths[col.key] + padding * 2)).join('┼') + '┤\n';
  } else {
    result += headerRow + '\n';
  }
  
  // Generate data rows
  data.forEach(row => {
    const rowStr = columns.map(col => {
      const value = String(row[col.key] || '');
      const padding1 = ' '.repeat(padding);
      const padding2 = ' '.repeat(columnWidths[col.key] - value.length + padding);
      
      // Use formatText instead of direct ANSI codes
      const formattedValue = col.color 
        ? formatText(value, { fontColor: col.color })
        : value;
      
      return `${padding1}${formattedValue}${padding2}`;
    }).join(border ? '│' : '');
    
    if (border) {
      result += '│' + rowStr + '│\n';
    } else {
      result += rowStr + '\n';
    }
  });
  
  // Border bottom if requested
  if (border) {
    result += '└' + columns.map(col => '─'.repeat(columnWidths[col.key] + padding * 2)).join('┴') + '┘\n';
  }
  
  return result;
}