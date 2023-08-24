import {
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete,
    Header,
    Res,
  } from '@nestjs/common';

import * as XLSX from 'xlsx';

@Controller('excel')
export class ExcelController {

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

    // step 1. workbook 생성
    const wb = XLSX.utils.book_new();

    // step 2. 시트 만들기
    const newWorksheet = XLSX.utils.json_to_sheet(this.users);

    // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.
    XLSX.utils.book_append_sheet(wb, newWorksheet, '연락처');

    const wbOptions: XLSX.WritingOptions = { bookType: 'xlsx', type: 'base64' };

    // step 4. 파일을 생성한다. (메모리에만 저장)
    const wbout = XLSX.write(wb, wbOptions);

    // step 5. 파일을 response 한다.
    res.end(Buffer.from(wbout, 'base64'));
  }
}