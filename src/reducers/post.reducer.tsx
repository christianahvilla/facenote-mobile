import PostModel from "../models/post.model";
import { PostType } from "../types/post.types";
import { Reducer } from "redux";
import { postConstant } from "../constants/post.constants";

interface PostState {
    loading: boolean,
    posts: Array<PostModel>
    errorMessage?: string
}

const initialState: PostState = {} as PostState

export const postReducer: Reducer<PostState, PostType> = (state = initialState, action: PostType) => {
    switch(action.type){
        case postConstant.FETCH_POST_BEGIN:
            return {
                ...state,
                loading: true,
                errorMessage: ""
            }
        case postConstant.FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMessage: "",
                posts: action.posts
            }
        case postConstant.FETCH_POST_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage
            }
        default:
            return state
    }
}