# Slack ID extractor

Convert a list of names (e.g. copied from Airtable) into their Slack IDs (based on an export from a Slack workspace).

## To use

1. `npm install`. 
2. Add a file, `users.json`, containing user info exported from a Slack workspace.
2. Change `NAMES` in index.js to a comma-separated list of strings that are the names you want to convert to IDs.
3. `npm start`.

The IDs are output to the console and if they're not found, they're just rendered as the original names.

Then copy-paste from the terminal back into Airtable. Simple!