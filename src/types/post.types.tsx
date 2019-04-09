import { Action } from "redux";
import { postConstant } from "../constants/post.constants";
import PostModel from "../models/post.model";

export interface IActionFetchBegin extends Action {
    type: postConstant.FETCH_POST_BEGIN
}

export interface IActionFetchError extends Action {
    type: postConstant.FETCH_POST_ERROR,
    errorMessage: string
}

export interface IActionFetchSuccess extends Action {
    type: postConstant.FETCH_POST_SUCCESS,
    posts: Array<PostModel>
}

export type PostType = IActionFetchBegin | IActionFetchSuccess | IActionFetchError