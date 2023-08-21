import { Repository } from 'typeorm'
import { Board } from './board.entity'
import { CreateBoardDto } from './boards.dto';
import { BoardStatus } from './board-status-enum';
import { CustomRepository } from 'src/typeorm/typeorm-ex.decorator';

@CustomRepository(Board)
export class BoardRepository extends Repository<Board> {
    async createBoard(createBoardDto : CreateBoardDto) : Promise<Board> {
        const {title, description} = createBoardDto;
        const board = this.create({
            title,
            description,
            status : BoardStatus.PUBLIC
        })

        await this.save(board);
        return board
    }
}