import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { stringify } from 'csv-stringify';
import moment from 'moment';

@Injectable()
export class ExcelService {

  async excel(sheet: string, data: any) {
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


  async csv(jsonData: any[]): Promise<string> {
    const converted = jsonData.map(document => ({
        ...document,
        createdAt: document.createdAt ? moment(document.createdAt).format('YYYY-MM-DD HH:mm:ss') : undefined,
        updatedAt: document.updatedAt ? moment(document.updatedAt).format('YYYY-MM-DD HH:mm:ss') : undefined,
    }));

    if (jsonData.length === 0) {
        return '';
    }
    
    const csvData = [Object.keys(jsonData[0])].concat(converted.map(item => Object.values(item)));
    
    return new Promise((resolve, reject) => {
      stringify(csvData, (err, output) => {
        if (err) {
          return reject(err);
        }
        resolve(output);
      });
    });
  }
}