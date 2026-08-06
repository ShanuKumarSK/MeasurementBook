import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';

import { getBlocks, getDistricts, getPanchayats, getStates } from '../../services/location.service';
import { BlockModel, DistrictModel, PanchayatModel, StateModel } from '../../models/location';
import { RootState } from '../store';

interface LocationState {
    loading: boolean;
    states: StateModel[];
    districts: DistrictModel[];
    blocks: BlockModel[];
    panchayats: PanchayatModel[];
    selectedState?: StateModel;
    selectedDistrict?: DistrictModel;
    selectedBlock?: BlockModel;
    selectedPanchayat?: PanchayatModel;
}

const initialState: LocationState = {
    loading: false,
    states: [],
    districts: [],
    blocks: [],
    panchayats: [],
    selectedState: undefined,
    selectedDistrict: undefined,
    selectedBlock: undefined,
    selectedPanchayat: undefined,
};

export const fetchStates = createAsyncThunk(

    'location/fetchStates',

    async () => {

        const response = await getStates();

        const data =
            typeof response.data === 'string'
                ? JSON.parse(response.data)
                : response.data;

        return data;

    },

);

export const fetchDistricts = createAsyncThunk(

    'location/fetchDistricts',

    async (stateId: number) => {

        const response = await getDistricts(stateId);

        const data = JSON.parse(response.data);

        console.log(
            'Districts Response:',
            JSON.stringify(data[0], null, 2),
        );

        return data.map((item: any) => ({

            id: Number(item.lgd_dist_code),

            code: item.district_code,

            name: item.district_name,

        }));

    });


export const fetchBlocks = createAsyncThunk(

    'location/fetchBlocks',

    async (districtId: number, { getState }) => {

        const state = getState() as RootState;

        const stateId =
            state.location.selectedState?.id;

        if (!stateId) {
            throw new Error('State not selected');
        }

        const response = await getBlocks(
            stateId,
            districtId,
        );

        const data = JSON.parse(response.data);

        console.log(
            'Blocks Response:',
            JSON.stringify(data[0], null, 2),
        );

        return data.map((item: any) => ({

            id: Number(item.lgd_block_code),

            code: item.block_code,

            name: item.block_name,

        }));

    });



export const fetchPanchayats = createAsyncThunk(

    'location/fetchPanchayats',

    async (
        blockId: number,
        { getState },
    ) => {

        const state = getState() as RootState;

        const stateId =
            state.location.selectedState?.id;

        const districtId =
            state.location.selectedDistrict?.id;

        if (!stateId || !districtId) {

            throw new Error(
                'State/District not selected',
            );

        }

        const response =
            await getPanchayats(
                stateId,
                districtId,
                blockId,
            );

        const data =
            typeof response.data === 'string'
                ? JSON.parse(response.data)
                : response.data;

        console.log(
            'Panchayat Raw',
            JSON.stringify(data[0], null, 2),
        );

        return data.map((item: any) => ({

            id: Number(item.lgd_gp_code),

            code: item.Panchayat_code,

            name: item.Panchayat_name,

        }));

    },

);



const locationSlice = createSlice({

    name: 'location',

    initialState,

    reducers: {

        setSelectedState(state, action) {

            state.selectedState = action.payload;

        },
        setSelectedDistrict(state, action) {

            console.log('Reducer District:', action.payload);

            state.selectedDistrict = action.payload;

        },
        setSelectedBlock(state, action) {

            state.selectedBlock = action.payload;

        },
        setSelectedPanchayat(state, action) {

            state.selectedPanchayat = action.payload;

        },
        clearDistricts(state) {

            state.districts = [];
            state.selectedDistrict = undefined;

            state.blocks = [];
            state.selectedBlock = undefined;

            state.panchayats = [];
            state.selectedPanchayat = undefined;

        },

        clearBlocks(state) {

            state.blocks = [];
            state.selectedBlock = undefined;

            state.panchayats = [];
            state.selectedPanchayat = undefined;

        },

        clearPanchayats(state) {

            state.panchayats = [];
            state.selectedPanchayat = undefined;

        },

    },

    extraReducers: builder => {

        builder

            .addCase(fetchStates.pending, state => {

                state.loading = true;

            })

            .addCase(fetchStates.fulfilled, (state, action) => {

                state.loading = false;

                state.states = action.payload.map((item: any) => ({
                    id: Number(item.lgd_st_code),
                    code: item.state_code,
                    name: item.State_Name,
                }));

            })

            .addCase(fetchStates.rejected, state => {

                state.loading = false;

            })

            .addCase(fetchDistricts.pending, state => {
                state.loading = true;
            })

            .addCase(fetchDistricts.fulfilled, (state, action) => {
                state.loading = false;
                state.districts = action.payload;
            })

            .addCase(fetchDistricts.rejected, state => {
                state.loading = false;
            })

            .addCase(fetchBlocks.pending, state => {
                state.loading = true;
            })

            .addCase(fetchBlocks.fulfilled, (state, action) => {
                state.loading = false;
                state.blocks = action.payload;
            })

            .addCase(fetchBlocks.rejected, state => {
                state.loading = false;
            })

            .addCase(fetchPanchayats.pending, state => {
                state.loading = true;
            })

            .addCase(fetchPanchayats.fulfilled, (state, action) => {
                state.loading = false;
                state.panchayats = action.payload;
            })

            .addCase(fetchPanchayats.rejected, state => {
                state.loading = false;
            });

    },

});

export const {
    setSelectedState,
    setSelectedDistrict,
    setSelectedBlock,
    setSelectedPanchayat,
    clearDistricts,
    clearBlocks,
    clearPanchayats,
} = locationSlice.actions;

export default locationSlice.reducer;