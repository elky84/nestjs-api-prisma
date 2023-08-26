import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';

@Module({
  imports: [],
  controllers: [AppController, ExcelController],
  providers: [AppService, UserService, PostService, PrismaService, ExcelService],
})
export class AppModule {}
