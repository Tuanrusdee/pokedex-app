export interface IPokemonListResponse {
    count: number
    next: string
    previous: null
    results: IPokemonListItems[]

}

export interface IPokemonListItems {
    name: string
    url: string
}
