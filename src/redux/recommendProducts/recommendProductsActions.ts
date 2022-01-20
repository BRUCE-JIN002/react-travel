import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

//正在调用推荐信息API
export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START";
//调用推荐信息API成功
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS";
//调用推荐信息API失败
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL";

interface FetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}


interface FetchRecommendProductSucessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any,
}

interface FetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any,
}


export type RecommendProductAction  = 
    | FetchRecommendProductStartAction
    | FetchRecommendProductSucessAction
    | FetchRecommendProductFailAction;


export const fetchRecommendProductStartActionCreator = (): FetchRecommendProductStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    };
};

export const fetchRecommendProductSuccessActionCreator = (data): FetchRecommendProductSucessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data,
    };
};


export const fetchRecommendProductFailActionCreator = (error): FetchRecommendProductFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error,
    };
};

//thunk 可以返回一个函数， 而不一定是js对象
// 在一个thunk action中可以完场一系列的action操作
// 并且可以处理异步逻辑
// 业务逻辑可以从UI层面挪到这里， 代码分层会更清晰
export const giveMeDataActionCreator = () : ThunkAction<
void, 
RootState, 
unknown, 
RecommendProductAction
> => async (dispatch, getState) => {
    dispatch(fetchRecommendProductStartActionCreator());
    try {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/productCollections`
        );
        dispatch(fetchRecommendProductSuccessActionCreator(data));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchRecommendProductFailActionCreator(error.message));
        }
    }
};