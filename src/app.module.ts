import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { BoardsService } from './boards/boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config'
import { BoardRepository } from './boards/board.repository';
import { TypeOrmExModule } from './typeorm/typeorm-ex.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), 
    TypeOrmExModule.forCustomRepository([BoardRepository]),
    BoardsModule
  ],
  controllers: [AppController],
  providers: [AppService, BoardsService],
})
export class AppModule {}
