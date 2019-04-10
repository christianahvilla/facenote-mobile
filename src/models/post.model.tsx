import { Author } from "./author.model";

export default interface PostModel{
    _id: string,
    text: string,
    image: string,
    author: Author
}