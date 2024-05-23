// import { gql, request } from 'graphql-request';

// const MASTER_API = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw3drx670gi506v1ahdw5iky/master'

// const getSlider = async () => {

//     const query = gql`
//     query GetSlider {
//         sliders {
//           id
//           name
//           image {
//             url
//           }
//         }
//       }

//   `
//     const result = await request(MASTER_API, query)
//     return result

// }

// export default { getSlider }

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clw3drx670gi506v1ahdw5iky/master';

const getSlider = async () => {

    const query = `
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }           
  `;

    try {
        const response = await fetch(MASTER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { error: error.message };
    }
}

export default { getSlider };
