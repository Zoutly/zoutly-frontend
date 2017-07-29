export namespace response {
    export interface IFeedItemResponse {
        id: number;
        header: string;
        location: ILocationResponse;
        type: string;
        imageUrl: string;
        userList: IUserResponse[];
    }

    export interface IUserResponse {
        firstname: string;
        lastname: string;
        nickname: string;
        age: number;
        gender: string;
        imageUrl: string;
    }

    export interface ILocationResponse {
        text: string;
    }
}