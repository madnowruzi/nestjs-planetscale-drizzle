import { Inject, Injectable } from '@nestjs/common';
import { DB, DbType } from '@/global/providers/db.provider';
import { notes, NewNote, Note } from '@/_schemas/notes';
import { desc, eq } from 'drizzle-orm';

@Injectable()
export class NoteService {
  constructor(@Inject(DB) private readonly db: DbType) {}

  async list(): Promise<Note[]> {
    return this.db.select().from(notes).orderBy(desc(notes.createdAt));
  }

  async get(id: number): Promise<Note> {
    const result = await this.db.select().from(notes).where(eq(notes.id, id));

    return result.length === 0 ? null : result[0];
  }

  async create(row: NewNote): Promise<{ id: number }> {
    const result = await this.db.insert(notes).values(row);

    return { id: result[0].insertId };
  }

  async update(id: number, values: Partial<Note>) {
    const result = await this.db
      .update(notes)
      .set(values)
      .where(eq(notes.id, id));

    return result[0].affectedRows;
  }

  async delete(id: number) {
    const result = await this.db.delete(notes).where(eq(notes.id, id));

    return result[0].affectedRows;
  }
}
