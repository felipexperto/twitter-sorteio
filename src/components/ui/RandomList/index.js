import React, { useEffect, Fragment } from 'react';
import axios from 'axios';
import * as S from './styled';

const RandomList = () => {

    useEffect(() => {

        const requestURI = 'https://api.twitter.com/1.1/search/tweets.json?q=@vagastech';
        const token = 'AAAAAAAAAAAAAAAAAAAAANGCAQEAAAAAQNeJ5YKYScqBaWpE4zGev%2Fv5jAU%3DekfxQiiiwlGoWgIrUJUs2UWk3kuVr1SXlYI0pE0UG4CCQHHdLp';

        axios
        .get(requestURI, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

        axios({
          method: 'POST',
          url: requestURI,
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
          .then((response) => console.log(response))
          .catch((error) => console.log(error));

        /*
        axios({
          url: requestURI,
          method: 'get',
          headers: { ...defaultHeaders },
          // data: { ...getJobsDefaultParams },
          timeout: 3000,
          crossDomain: true,
          responseType: 'json',
          responseEncoding: 'utf8',
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
*/

    }, []);



    return (
        <Fragment>
            
        </Fragment>
    )
}

export default RandomList;