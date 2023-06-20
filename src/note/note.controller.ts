import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NoteService } from '@/note/note.service';

@Controller('notes')
export class NoteController {
  constructor(private readonly service: NoteService) {}

  @Get('/')
  async index() {
    return this.service.list();
  }

  @Get('/:id')
  async get(@Param('id') id: string) {
    return this.service.get(+id);
  }

  @Post('/')
  async create(@Body() params: any) {
    const newRow = await this.service.create({
      title: params.title,
      body: params.body,
    });

    return { notes: [newRow] };
  }

  @Patch('/:id')
  @HttpCode(204)
  async update(@Param('id') id: string, @Body() params: any) {
    await this.service.update(+id, {
      title: params.title,
      body: params.body,
    });

    return null;
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    await this.service.delete(+id);

    return null;
  }
}
