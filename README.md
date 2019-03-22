# FCC-APIs-project-Timestamp-Microservice-
## Usage: 
1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. Only accepts valid date strings that can be parsed by the `Date.parse(date_string)` method. Note that to ensure an UTC timestamp, date strings should be compliant with ISO-8601 (e.g. `"2016-11-20"`).
3. If the date string is **empty** it is equivalent to triggering `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the API returns a JSON having the structure `{"unix": <date.getTime()>, "utc": <date.toUTCString()>}` e.g. `{"unix": 1479663089000, "utc": "Sun, 20 Nov 2016 17:31:29 GMT}`
5. If the provided date string is **invalid** the API returns a JSON having the structure `{"error": "Invalid Date"}`

### Example usage:
- `GET https://happy-scarf.glitch.me/api/timestamp/2015-12-25`
- `GET https://happy-scarf.glitch.me/api/timestamp/1450137600`

### Example Output:
`{"unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT"}`
