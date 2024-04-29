const AutoComplete = require('youtube-autocomplete');

export const autocomplete = (query => {
  AutoComplete(query, (err, queries) => {
    if (err) throw err;
    return queries;
  })
});