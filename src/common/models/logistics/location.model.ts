import { Geometry } from '../../types';
import { BaseModel } from '../base.model';

export class LocationModel<Meta, Prop = Record<string, unknown>> extends BaseModel<
  LocationModel<Meta, Prop>,
  Meta
> {
  identity!: string;
  geometry!: Geometry;
  properties?: Prop;
}
