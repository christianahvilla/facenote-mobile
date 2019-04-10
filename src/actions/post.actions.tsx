import * as types from "../types/post.types"
import { postConstant } from "../constants/post.constants";
import PostModel from "../models/post.model";
import { Dispatch } from "redux";
import { API } from "../api/post.api";



/**
 * Consts to get posts from API implementing API request convention
 * @function fetchDataBegin
 * @function fetchDataSuccess
 * @function fetchDataError
 */

const fetchDataBegin = (): types.IActionFetchBegin => {
    return {
        type: postConstant.FETCH_POST_BEGIN
    }
}

const fetchDataError = (e: Error): types.IActionFetchError => {
    return {
        type: postConstant.FETCH_POST_ERROR,
        errorMessage: e.message
    }
}

const fetchDataSuccess = (posts: Array<PostModel>): types.IActionFetchSuccess => {
    return {
        type: postConstant.FETCH_POST_SUCCESS,
        posts
    }
}

/**
 * Function to get posts from API implementing API request convention
 */

export const getPosts = () => {
    return (dispatch: Dispatch) => {
        dispatch(fetchDataBegin())
        API.getPosts().then(response => {
            dispatch(fetchDataSuccess(response.data))
        }).catch((error: Error) => {
            dispatch(fetchDataError(error))
        })
    }
}