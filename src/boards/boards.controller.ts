import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status-enum';
import { CreateBoardDto } from './boards.dto';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService){}

    @Get()
    getAllBoard() : Promise<Board[]> {
        return this.boardService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardDto : CreateBoardDto 
    ) : Promise<Board> {
        return this.boardService.createBoard(createBoardDto);  
    }

    @Get('/:id')
    getBoardById(@Param('id') id : number) : Promise<Board> {
        return this.boardService.getBoardById(Number(id))
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id : number) : void {
        this.boardService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id : number,
        @Body('status') status : BoardStatus
    ){
        return this.boardService.updateBoardStatus(id, status);
    }
}