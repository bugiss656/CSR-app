import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

import TextInput from '../../components/TextInput/TextInput';
import Select from 'react-select';
import Card from '../../components/Card/Card';



export const GET_COUNTRIES = gql`
    query {
        countries {
            name
            code
            continent {
                code
                name
            }
            languages {
                name
            }
        }
    }
`

const GET_CONTINENTS = gql`
    query {
       continents {
           code
           name
       } 
    }
`

export interface ICountry {
    name: string
    code: string
    continent: {
        code: string
    }
    languages: {
        name: string
    }
    emoji: string
}

interface IContinent {
    code: string
    name: string
}

interface ITextInputState {
    textInputValue: string
}

const CountryList = () => {
    const { loading: countriesLoading, data: countriesData, error: countriesError } = useQuery(GET_COUNTRIES)
    const { loading: continentLoading, data: continentsData, error: continentError } = useQuery(GET_CONTINENTS)


    let getContinents = []
    

    if(continentsData) {
        getContinents = continentsData.continents.map((continent: IContinent) => {
            return {
                value: continent.code,
                label: continent.name
            }
        })
    }
    

    const continentsOptions = [
        { value: 'all', label: 'All' },
        ...getContinents
    ]


    const [textInputValue, setTextInputValue] = useState<ITextInputState['textInputValue']>('')
    const [selectedOptionValue, setSelectedOptionValue] = useState(continentsOptions[0])


    const filterCountries = (country: ICountry) => {
        if(textInputValue === '' && selectedOptionValue.value === "all") {
            return country

        } else if(country.name.toLowerCase().includes(textInputValue.toLowerCase()) && selectedOptionValue.value === "all") {
            return country

        } else if(country.name.toLowerCase().includes(textInputValue.toLowerCase()) && country.continent.code === selectedOptionValue.value) {
            return country
        }
    }


    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <TextInput 
                        placeholder="Serach country..." 
                        value={textInputValue} 
                        onChange={(event) => { setTextInputValue(event.target.value) }} 
                    />
                </div>
                <div className="col">
                    <Select
                        defaultValue={selectedOptionValue}
                        options={continentsOptions}
                        onChange={setSelectedOptionValue}
                    />
                </div>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                {countriesLoading && <div>Loading...</div>}
                {countriesError && <div>Error occured...</div>}
                {countriesData &&
                    countriesData.countries
                        .filter(filterCountries)
                        .map((country: ICountry) =>
                            <Card
                                key={country.code}
                                name={country.name}
                                code={country.code}
                                src={`/${country.code}`}
                            />
                        )
                }
            </div>
        </div>
    )
}

export default CountryList;