import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import * as XLSX from 'xlsx';

@Injectable()
export class ExcelService {

  async write(sheet, data) {
    return new Promise((resolve, reject) => {
      try {
        const wb = XLSX.utils.book_new();
        const newWorksheet = XLSX.utils.json_to_sheet(data);
    
        XLSX.utils.book_append_sheet(wb, newWorksheet, sheet);

        const wbOptions:XLSX.WritingOptions = { bookType: 'xlsx', type: 'base64' };
        const buffer = Buffer.from(XLSX.write(wb, wbOptions), 'base64');
        resolve(buffer);
      } catch (error) {
        reject(error);
      }
    });
  }
}