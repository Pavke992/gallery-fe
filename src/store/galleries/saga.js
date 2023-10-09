import { call, put, takeLatest } from "redux-saga/effects";
import { performFetchGalleries, setGalleries } from "./slice";
import GalleriesService, { getAll }from '../../services/galleries.service';

function * fetchGalleriesHandler () {
    try {
        const response = yield call(GalleriesService.getAll)
        console.log(response);
        yield put(setGalleries(response.data));
    } catch (error) {
        console.log(error)
    }
}

export function* watchFetchGalleries() {
    yield takeLatest(performFetchGalleries.type, fetchGalleriesHandler);
    }