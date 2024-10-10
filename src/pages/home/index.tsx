import PokemonCard from '@/components/PokemonCard';
import SearchForm from '@/components/SearchForm';
import { usePokemonListStore } from '@/store/pokemonList';
import ReactLoading from "react-loading";

function HomePage() {
    const { pokemon, fetchPokemon } = usePokemonListStore()


    return (
        <div className=" w-[90%] m-[auto] max-w-[1100px]">
            <div className="flex justify-center">
                <img src="/images/Pok%3Fdex_3D_logo.webp" alt="logo" className="max-h-[100px] mt-[20px]" />
            </div>
            <SearchForm />
            {fetchPokemon.loading && (
                <div className='h-[600px] flex justify-center items-center '>
                    <ReactLoading type="spin" color="#fff" />
                </div>
            )}

            {!fetchPokemon.loading &&
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px]">
                        {pokemon.data?.map((item, index) => {
                            return <PokemonCard key={index} name={item.name} image={item.image || ''} id={item.id} types={item.types} />
                        })}
                    </div>
                )}

        </div>
    )
}

export default HomePage