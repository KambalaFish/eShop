import Joi from 'joi';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import JoiObjectId from 'joi-objectid';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Joi.objectId = JoiObjectId(Joi);

interface ExtendedJoi extends Joi.Root {
  objectId(): Joi.AlternativesSchema;
}

const ExtendedJoi = Joi as ExtendedJoi;

export { ExtendedJoi };
