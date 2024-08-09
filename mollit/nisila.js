// Define the prefix and field variables
const IndexPrefix = "user_";
const field = "email";

// Concatenate the prefix and field to create the index name
const indexName = IndexPrefix + field;

console.log(indexName); // Output: "user_email"
