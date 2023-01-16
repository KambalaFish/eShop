import type { ArbitraryIdName } from '@interfaces/id';

export interface IBaseCRUDService<T extends object> {
  create(input: T): Promise<T>;
  find(query?: Partial<T | ArbitraryIdName>): Promise<T[]>;
  update(query: Partial<T | ArbitraryIdName>, update: Partial<T>): Promise<T>;
  delete(query: Partial<T | ArbitraryIdName>): Promise<T>;
}
