import { Module } from '@nestjs/common';
import { NoteController } from '@/note/note.controller';
import { NoteService } from '@/note/note.service';

@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
