import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbConfig } from '@/config';
import { NoteModule } from '@/note/note.module';
import { GlobalModule } from '@/global/global.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [DbConfig],
    }),
    GlobalModule,
    NoteModule,
  ],
})
export class AppModule {}
