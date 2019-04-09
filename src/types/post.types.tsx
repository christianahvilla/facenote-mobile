import { Action } from "redux";
import { postConstant } from "../constants/post.constant";
import PostModel from "../models/post.model";

interface IActionFetchBegin extends Action {
    type: postConstant.FETCH_POST_BEGIN
}

interface IActionFetchError extends Action {
    type: postConstant.FETCH_POST_ERROR,
    errorMessage: string
}

interface IActionFetchSuccess extends Action {
    type: postConstant.FETCH_POST_SUCCESS,
    posts: Array<PostModel>
}

export type PostType = IActionFetchBegin | IActionFetchSuccess | IActionFetchError