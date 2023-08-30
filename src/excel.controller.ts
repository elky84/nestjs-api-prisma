import {
    Controller,
    Get,
    Header,
    Res,
  } from '@nestjs/common';

import * as XLSX from 'xlsx';
import { ExcelService } from './excel.service';

@Controller('excel')
export class ExcelController {
  constructor(
    private readonly excelService: ExcelService
  ) {}

  private readonly users = [
    {
      name: 'John',
      age: 27,
      phone: '010-1111-1111',
    },
    {
      name: 'Peter',
      age: 23,
      phone: '010-2222-2222',
    },
    {
      name: 'Grace',
      age: 25,
      phone: '010-3333-3333',
    },
    {
      name: 'Paul',
      age: 26,
      phone: '010-4444-4444',
    },
    {
      name: 'David',
      age: 27,
      phone: '010-5555-5555',
    },
  ];

  @Get()
  @Header('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
  @Header('Content-Disposition', 'attachment; filename=users.xlsx')
  async makeExcel(@Res() res) {
    res.end(await this.excelService.excel('users', this.users));
  }

  @Get('csv')
  @Header('Content-Type', 'text/csv')
  @Header('Content-Disposition', 'attachment; filename=users.csv')
  async makeCsv(@Res() res) {
    res.end(await this.excelService.csv(this.users, this.excelService.dateTransformFunction));
  }
}