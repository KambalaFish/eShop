import type mongoose from 'mongoose';
import type { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import type { IBaseCRUDService } from '@interfaces/IBaseCRUDService';

class BaseCRUDService<T extends object> implements IBaseCRUDService<T> {
  private model: mongoose.Model<T>;
  constructor(model: mongoose.Model<T>) {
    this.model = model;
    this.create = this.create.bind(this);
    this.find = this.find.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  public async create(input: T) {
    const result = await this.model.create(input);
    return result.toJSON() as T;
  }
  public async find(query: FilterQuery<T> = {}) {
    return this.model.find(query).lean<T[]>();
  }

  public async update(
    query: FilterQuery<T>,
    update: UpdateQuery<T>,
    options: QueryOptions = {
      new: true,
      lean: true,
    }
  ) {
    return this.model.findOneAndUpdate(query, update, options).lean<T>();
  }

  public async delete(query: FilterQuery<T>, options: QueryOptions = {}) {
    return this.model.findOneAndDelete(query, options).lean<T>();
  }
}

export { BaseCRUDService };
