 export function authorsFormattedFromDropdown(authors) {
     return authors.map((author) => {
         return {
             value: author.id,
             text: author.firstName + ' ' + author.lastName
         };
     });
 }