export interface IUser {
    name: string
    data: string
    files: Array<{ name: string, data: string, id: string }>
    id: string
}