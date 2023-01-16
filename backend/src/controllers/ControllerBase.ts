import type { IBaseCRUDService } from '@interfaces/IBaseCRUDService';
import type { Request, Response } from 'express';
import { StatusCodes } from '@utils/statusCodes';
import { errorHandler } from '@utils/errorHandling/errorHandler';
import { NotFoundError } from '@utils/errorHandling/customErrors';
import type { ArbitraryIdName } from '@interfaces/id';

class ControllerBase<T extends object> {
  private service: IBaseCRUDService<T>;
  private readonly controlledEntityName: string;
  constructor(service: IBaseCRUDService<T>, controlledEntityName: string) {
    this.service = service;
    this.controlledEntityName = controlledEntityName;
    this.create = this.create.bind(this);
    this.get = this.get.bind(this);
    this.getByIdWrapper = this.getByIdWrapper.bind(this);
    this.updateByIdWrapper = this.updateByIdWrapper.bind(this);
    this.deleteByIdWrapper = this.deleteByIdWrapper.bind(this);
  }

  public async create(req: Request<object, object, T>, res: Response) {
    try {
      const result = await this.service.create(req.body);
      return res.status(StatusCodes.CREATED).json({ result });
    } catch (error) {
      return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
    }
  }

  public async get(req: Request<object, object, Partial<T>>, res: Response) {
    try {
      const result = await this.service.find(req.body);
      if (!result || result.length === 0) {
        return errorHandler(
          new NotFoundError(
            `Can't find ${this.controlledEntityName} with ${JSON.stringify(
              req.body
            )} properties.`
          ),
          StatusCodes.NOT_FOUND,
          res
        );
      }
      return res.status(StatusCodes.OK).json({ result });
    } catch (error) {
      return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
    }
  }

  public getByIdWrapper(
    idParameterName: string,
    idPropertyNameInDatabase = '_id'
  ) {
    return async (req: Request<ArbitraryIdName>, res: Response) => {
      try {
        const id = req.params[idParameterName];
        const [result] = await this.service.find({
          [idPropertyNameInDatabase]: id,
        });
        if (!result) {
          return errorHandler(
            new NotFoundError(
              `Can't find ${this.controlledEntityName} with the ${id} id.`
            ),
            StatusCodes.NOT_FOUND,
            res
          );
        }
        return res.status(StatusCodes.OK).json({ result });
      } catch (error) {
        return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
      }
    };
  }

  public updateByIdWrapper(
    idParameterName: string,
    idPropertyNameInDatabase = '_id'
  ) {
    return async (
      req: Request<ArbitraryIdName, object, Partial<T>>,
      res: Response
    ) => {
      try {
        const id = req.params[idParameterName];
        const result = await this.service.update(
          { [idPropertyNameInDatabase]: id },
          req.body
        );
        if (!result) {
          return errorHandler(
            new NotFoundError(
              `Can't update ${this.controlledEntityName} with the ${id} id. The ${this.controlledEntityName} was not found.`
            ),
            StatusCodes.NOT_FOUND,
            res
          );
        }
        return res.status(StatusCodes.OK).json({ result });
      } catch (error) {
        return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
      }
    };
  }

  public deleteByIdWrapper(
    idParameterName: string,
    idPropertyNameInDatabase = '_id'
  ) {
    return async (req: Request<ArbitraryIdName>, res: Response) => {
      const id = req.params[idParameterName];
      try {
        const result = await this.service.delete({
          [idPropertyNameInDatabase]: id,
        });
        if (!result) {
          return errorHandler(
            new NotFoundError(
              `Can't delete ${this.controlledEntityName} with the ${id} id. The ${this.controlledEntityName} was not found.`
            ),
            StatusCodes.NOT_FOUND,
            res
          );
        }
        const capitalizedEntityName =
          this.controlledEntityName.charAt(0).toUpperCase() +
          this.controlledEntityName.slice(1).toLowerCase();
        return res.status(StatusCodes.OK).json({
          message: `${capitalizedEntityName} with ${id} id was deleted successfully.`,
        });
      } catch (error) {
        return errorHandler(error, StatusCodes.INTERNAL_SERVER_ERROR, res);
      }
    };
  }
}

export { ControllerBase };
