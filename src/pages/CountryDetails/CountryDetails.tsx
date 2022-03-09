import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import './CountryDetails.css';



const GET_SINGLE_COUNTRY = gql`
    query getSingleCountry($code: String) {
        countries(filter: {
            code: {
                eq: $code
            }
        })
        {   
            code
  	        name
            languages {
                name
            }
        emoji
        }
    }
`


const CountryDetails = () => {
    const params = useParams();
    const { loading: countryLoading, data: countryData, error: countryError } = useQuery(GET_SINGLE_COUNTRY, { variables: { code: params.code } })

    return (
        <div className="d-flex">
            {countryData && 
                <section className="mx-3 my-5">
                    <h1>Country details: <b>{countryData.countries[0].name}</b></h1>
                    <hr />
                    <ul className="list-group">
                        <li className="list-group-item"><b>Code:</b> {countryData.countries[0].code}</li>
                        <li className="list-group-item"><b>Emoji:</b> {countryData.countries[0].emoji}</li>
                        <li className="list-group-item"><b>Languages:</b>
                            <ul className="languages-list">
                                {countryData.countries[0].languages.map((language: any) => (
                                    <li>-{language.name}</li>
                                ))}
                            </ul> 
                        </li>
                    </ul>
                </section>
            }
        </div>
    )
}

export default CountryDetails;