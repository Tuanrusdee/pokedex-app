import { IPokemonDetailResponse } from "@/interface/pokemonDetail"
import { POKEMON_BASE_URL } from "@/utils/constant"
import { handleResponse, IResponse } from "@/utils/handleResponse"
import axios from "axios"

interface IGetPokemonDetailResponse extends IResponse {
    status: number | undefined
    data?: IPokemonDetailResponse
}

export const pokemonDetailServices = {
    getPokemonDetail: async (name: string): Promise<IGetPokemonDetailResponse> => {
        // const response = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`)
        // return response
        try {
            const res = await axios.get(`${POKEMON_BASE_URL}/pokemon/${name}`)
            return handleResponse.success(res)
        } catch (error: any) {
            return handleResponse.error(error)

        }
    },
}