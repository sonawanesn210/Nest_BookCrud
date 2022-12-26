import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type BookDocument = Book & Document;
@Schema()
export class Book {
  @Prop()
  title: string;
  @Prop()
  author: string;
  required: true;
  @Prop()
  published: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
