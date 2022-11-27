export class Areas{
    constructor(
        public _id: string,
        public key:string,
        public name: string,
        public id: number
    ){}
}

export interface APIResponse<T> {
    results: Array<T>;
}