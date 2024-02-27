# Weazy

Weazy is a simple command-line utility designed to fetch the current weather using the OpenWeatherMap service. It allows conveniently fetching weather information for a chosen city.

## Usage

### Install

1. Install package globally:

```bash
npm i -g weazy
```

### Running

Run the utility using the following command:

```bash
weazy [OPTIONS]
```

### Options

- `-c <city>`: Set default city.
- `-t <API_KEY>`: Set OpenWeatherMap API key.
- `-h`: Get help

### Examples

```bash
# Set dafault city
weazy -c "Some city"

# Set token
weazy -t "Some token"

# Get the current weather in the default city
weazy
```

## Environment Variables

You can also use environment variables to set the default city and OpenWeatherMap API key:

- `CITY`: Set default city.
- `TOKEN`: Set OpenWeatherMap API key.

Example:

```bash
# Get the current weather in a specified city
CITY="Moscow" weazy

# Get the current weather in the default city using the specified token
TOKEN="your_openweathermap_api_key" weazy
```

## Notes

- If the city or API key is not specified, the utility will ask you to specify them.
- To obtain an OpenWeatherMap API key, register on their [website](https://openweathermap.org/) and get the key from your account.

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for additional information.

--- 

Author: Eugene Panin