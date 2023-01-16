import type { ObjectSchema } from 'joi';
export interface RequestSchema {
  body?: ObjectSchema;
  params?: ObjectSchema;
  query?: ObjectSchema;
}
