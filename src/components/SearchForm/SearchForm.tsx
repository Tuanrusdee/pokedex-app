import React from 'react';
import { generationList, typesList, sortList } from "@/utils/optionLists";
import { useSearchForm } from '@/components/SearchForm/SearchForm.hook';

const SearchForm = () => {
    const { fieldKeyword, fieldGeneration, fieldType, fieldSort } = useSearchForm()
    return (
        <form className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-[20px]'>
            <div className="w-full">
                <label htmlFor="generation" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation</label>
                <select {...fieldGeneration} id="Generation" className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-mb rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {generationList.map((item, index) => (
                        <option className='capitalize' key={`generation-key-${index}`} value={index}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="type" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <select {...fieldType} id="type" className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-mb rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {typesList.map((item, index) => (
                        <option className='capitalize' key={`type-key-${index}`} value={index}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="sort" className="capitalize block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By</label>
                <select {...fieldSort} id="sort" className="bg-gray-50 border capitalize border-gray-300 text-gray-900 text-mb rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {sortList.map((item, index) => (
                        <option className='capitalize' key={`sortList-key-${index}`} value={index}>{item}</option>
                    ))}
                </select>
            </div>
            <div className="w-full">
                <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
                <input {...fieldKeyword} id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-mb rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
        </form>
    )
}

export default SearchForm;
