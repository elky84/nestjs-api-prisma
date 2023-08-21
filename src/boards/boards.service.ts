import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status-enum';
import { CreateBoardDto } from './boards.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ) { }

    async getAllBoards() : Promise<Board[]> { 
        return this.boardRepository.find()
    }

    async createBoard(createBoardDto : CreateBoardDto) : Promise<Board> {
        return this.boardRepository.createBoard(createBoardDto);
    }

    async getBoardById(id : number) : Promise<Board> {
        const found = await this.boardRepository.findOne({ where: { id: id } });
    
        //found === null
        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        return found; 
    }

    async deleteBoard(id : number) : Promise<void> {
        const result = await this.boardRepository.delete(id);
        if(result.affected === 0){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        console.log(result)
    }

    async updateBoardStatus(id : number, status : BoardStatus) : Promise<Board> {
        const board = await this.getBoardById(id);
        board.status = status;
        this.boardRepository.save(board);
        return board;
    }
}