import React, { useEffect, Fragment } from 'react';

// import * as S from './styled';

const RandomList = () => {

    useEffect(() => {
        console.log(process.env.REACT_APP_APP_URL);
        // const requestURI = 'from%3Avagastech&result_type=recent&count=12';
        // const requestURI = 'TECHNO&result_type=recent&geocode=-23.6705893,-46.7713017km&granularity=neighborhood&count=12';
        const requestParameters = '%23FreeFire&result_type=recent&count=12';

        fetch(`http://localhost:3001/api/tweets?q=${requestParameters}`)
        .then(response => response.json()) 
        .then(response => console.log(response))
        .catch(err => {
          console.error('Failed retrieving information', err); 
        });
    }, []);

    return (
        <Fragment>
            
        </Fragment>
    )
};

export default RandomList;