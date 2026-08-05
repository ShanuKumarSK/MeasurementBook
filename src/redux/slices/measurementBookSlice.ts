import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Measurement {
  id: number;
  no: string;
  length: string;
  breadth: string;
  depth: string;
}

export interface Material {
  id: number;
  quantity: string;
  unitPrice: string;
}

export interface Activity {
  id: number;
  itemNo: string;
  activity: string;
  unit: string;
  totalQty: number;
  consumedQty: number;
  remainingQty: number;
  executingQty: number;
  totalCost: number;

  measurements: Measurement[];
  materials: Material[];
}

interface MeasurementBookState {
  activities: Activity[];
}

const initialState: MeasurementBookState = {
  activities: [],
};

const slice = createSlice({
  name: 'measurementBook',

  initialState,

  reducers: {

    setActivities(state, action: PayloadAction<Activity[]>) {
      state.activities = action.payload;
    },

    addActivity(state) {
      state.activities.push({
        id: Date.now(),
        itemNo: '',
        activity: '',
        unit: '',
        totalQty: 0,
        consumedQty: 0,
        remainingQty: 0,
        executingQty: 0,
        totalCost: 0,

        measurements: [
          {
            id: Date.now(),
            no: '',
            length: '',
            breadth: '',
            depth: '',
          },
        ],

        materials: [],
      });
    },

    removeActivity(state, action: PayloadAction<number>) {
      state.activities = state.activities.filter(
        a => a.id !== action.payload,
      );
    },

  },
});

export const {
  setActivities,
  addActivity,
  removeActivity,
} = slice.actions;

export default slice.reducer;