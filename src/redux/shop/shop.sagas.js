import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollections() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* onFetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollections);
}
