import { configureStore } from "@reduxjs/toolkit";
import galleriesReducer from "./galleries/slice";
import createSagaMiddleware from "@redux-saga/core";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        galleries: galleriesReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        sagaMiddleware
    ],
});

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
    }