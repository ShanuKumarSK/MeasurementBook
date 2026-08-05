import { MeasurementModel } from './measurement';
import { MaterialModel } from './material';

export interface ActivityModel {

  id: number;

  itemNo: string;

  activityName: string;

  unit: string;

  totalQty: number;

  consumedQty: number;

  remainingQty: number;

  executingQty: number;

  totalCost: number;

  measurements: MeasurementModel[];

  materials: MaterialModel[];

}