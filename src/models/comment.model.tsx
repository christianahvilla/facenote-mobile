import { Author } from "./author.model";

export default interface CommentModel{
    _id: string,
    text: string,
    author: Author
}