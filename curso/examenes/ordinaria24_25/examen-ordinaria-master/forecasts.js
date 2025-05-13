const FORECASTS = [
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1740582000,
        "main": {
          "temp": -4.75,
          "feels_like": -8.09,
          "temp_min": -6.58,
          "temp_max": -4.75,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 803,
          "humidity": 89,
          "temp_kf": 1.83
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 2.07,
          "deg": 230,
          "gust": 1.99
        },
        "visibility": 4912,
        "pop": 1,
        "snow": {
          "3h": 0.9
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 15:00:00"
      },
      {
        "dt": 1740592800,
        "main": {
          "temp": -5.82,
          "feels_like": -8.6,
          "temp_min": -6.82,
          "temp_max": -5.82,
          "pressure": 1025,
          "sea_level": 1025,
          "grnd_level": 804,
          "humidity": 93,
          "temp_kf": 1
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.61,
          "deg": 254,
          "gust": 2.98
        },
        "visibility": 653,
        "pop": 1,
        "snow": {
          "3h": 0.6
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 18:00:00"
      },
      {
        "dt": 1740603600,
        "main": {
          "temp": -7.42,
          "feels_like": -10.67,
          "temp_min": -7.42,
          "temp_max": -7.42,
          "pressure": 1027,
          "sea_level": 1027,
          "grnd_level": 804,
          "humidity": 94,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.74,
          "deg": 247,
          "gust": 2.26
        },
        "visibility": 655,
        "pop": 0.96,
        "snow": {
          "3h": 0.58
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 21:00:00"
      },
      {
        "dt": 1740614400,
        "main": {
          "temp": -7.94,
          "feels_like": -10.89,
          "temp_min": -7.94,
          "temp_max": -7.94,
          "pressure": 1028,
          "sea_level": 1028,
          "grnd_level": 805,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.54,
          "deg": 230,
          "gust": 2.22
        },
        "visibility": 529,
        "pop": 1,
        "snow": {
          "3h": 0.58
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 00:00:00"
      },
      {
        "dt": 1740625200,
        "main": {
          "temp": -8.53,
          "feels_like": -11.16,
          "temp_min": -8.53,
          "temp_max": -8.53,
          "pressure": 1029,
          "sea_level": 1029,
          "grnd_level": 805,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 1.35,
          "deg": 230,
          "gust": 1.45
        },
        "visibility": 983,
        "pop": 1,
        "snow": {
          "3h": 0.5
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 03:00:00"
      },
      {
        "dt": 1740636000,
        "main": {
          "temp": -5.61,
          "feels_like": -5.61,
          "temp_min": -5.61,
          "temp_max": -5.61,
          "pressure": 1029,
          "sea_level": 1029,
          "grnd_level": 807,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13d"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 1.3,
          "deg": 290,
          "gust": 3.98
        },
        "visibility": 604,
        "pop": 0.79,
        "snow": {
          "3h": 0.14
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 06:00:00"
      },
      {
        "dt": 1740646800,
        "main": {
          "temp": -1.98,
          "feels_like": -5.16,
          "temp_min": -1.98,
          "temp_max": -1.98,
          "pressure": 1026,
          "sea_level": 1026,
          "grnd_level": 807,
          "humidity": 71,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 600,
            "main": "Snow",
            "description": "light snow",
            "icon": "13d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 2.32,
          "deg": 316,
          "gust": 5.97
        },
        "visibility": 10000,
        "pop": 0.26,
        "snow": {
          "3h": 0.13
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 09:00:00"
      },
    ],
    "city": {
      "id": 611230,
      "name": "Vale",
      "coord": {
        "lat": 41.6156,
        "lon": 42.8722
      },
      "country": "GE",
      "population": 4733,
      "timezone": 14400,
      "sunrise": 1740541697,
      "sunset": 1740581694
    }
  },
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1740582000,
        "main": {
          "temp": 21.28,
          "feels_like": 22.02,
          "temp_min": 21.28,
          "temp_max": 21.28,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 990,
          "humidity": 98,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 77
        },
        "wind": {
          "speed": 1.47,
          "deg": 2,
          "gust": 2.4
        },
        "visibility": 10000,
        "pop": 0.77,
        "rain": {
          "3h": 0.64
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 15:00:00"
      },
      {
        "dt": 1740592800,
        "main": {
          "temp": 21.16,
          "feels_like": 21.92,
          "temp_min": 20.91,
          "temp_max": 21.16,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 989,
          "humidity": 99,
          "temp_kf": 0.25
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 78
        },
        "wind": {
          "speed": 1.6,
          "deg": 1,
          "gust": 2.16
        },
        "visibility": 10000,
        "pop": 0.75,
        "rain": {
          "3h": 0.52
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 18:00:00"
      },
      {
        "dt": 1740603600,
        "main": {
          "temp": 20.85,
          "feels_like": 21.58,
          "temp_min": 20.64,
          "temp_max": 20.85,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 989,
          "humidity": 99,
          "temp_kf": 0.21
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 83
        },
        "wind": {
          "speed": 1.93,
          "deg": 4,
          "gust": 3.06
        },
        "visibility": 10000,
        "pop": 0.46,
        "rain": {
          "3h": 0.35
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 21:00:00"
      },
      {
        "dt": 1740614400,
        "main": {
          "temp": 24.4,
          "feels_like": 25.14,
          "temp_min": 24.4,
          "temp_max": 24.4,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 991,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 84
        },
        "wind": {
          "speed": 1.7,
          "deg": 3,
          "gust": 4.98
        },
        "visibility": 10000,
        "pop": 0.16,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 00:00:00"
      },
      {
        "dt": 1740625200,
        "main": {
          "temp": 29.89,
          "feels_like": 31.88,
          "temp_min": 29.89,
          "temp_max": 29.89,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 990,
          "humidity": 56,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 1.6,
          "deg": 22,
          "gust": 3.83
        },
        "visibility": 10000,
        "pop": 0.26,
        "rain": {
          "3h": 0.11
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 03:00:00"
      },
      {
        "dt": 1740636000,
        "main": {
          "temp": 29.28,
          "feels_like": 31.35,
          "temp_min": 29.28,
          "temp_max": 29.28,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 987,
          "humidity": 59,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 91
        },
        "wind": {
          "speed": 0.58,
          "deg": 322,
          "gust": 3.51
        },
        "visibility": 10000,
        "pop": 0.6,
        "rain": {
          "3h": 0.51
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 06:00:00"
      },
      {
        "dt": 1740646800,
        "main": {
          "temp": 24.54,
          "feels_like": 25.35,
          "temp_min": 24.54,
          "temp_max": 24.54,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.64,
          "deg": 258,
          "gust": 1.42
        },
        "visibility": 10000,
        "pop": 0.98,
        "rain": {
          "3h": 1.13
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 09:00:00"
      },
      {
        "dt": 1740657600,
        "main": {
          "temp": 21.55,
          "feels_like": 22.27,
          "temp_min": 21.55,
          "temp_max": 21.55,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 990,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.02,
          "deg": 1,
          "gust": 0.94
        },
        "visibility": 10000,
        "pop": 0.89,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 12:00:00"
      },
      {
        "dt": 1740668400,
        "main": {
          "temp": 20.56,
          "feels_like": 21.26,
          "temp_min": 20.56,
          "temp_max": 20.56,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 991,
          "humidity": 99,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 1.39,
          "deg": 18,
          "gust": 0.97
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 15:00:00"
      },
      {
        "dt": 1740679200,
        "main": {
          "temp": 20.25,
          "feels_like": 20.92,
          "temp_min": 20.25,
          "temp_max": 20.25,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 99,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 86
        },
        "wind": {
          "speed": 1.39,
          "deg": 1,
          "gust": 1.47
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 18:00:00"
      },
      {
        "dt": 1740690000,
        "main": {
          "temp": 20.17,
          "feels_like": 20.85,
          "temp_min": 20.17,
          "temp_max": 20.17,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 988,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 1.5,
          "deg": 12,
          "gust": 1.86
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 21:00:00"
      },
      {
        "dt": 1740700800,
        "main": {
          "temp": 24.03,
          "feels_like": 24.76,
          "temp_min": 24.03,
          "temp_max": 24.03,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 990,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 1.4,
          "deg": 8,
          "gust": 2.82
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 00:00:00"
      },
      {
        "dt": 1740711600,
        "main": {
          "temp": 30.04,
          "feels_like": 31.6,
          "temp_min": 30.04,
          "temp_max": 30.04,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 988,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.92,
          "deg": 38,
          "gust": 3.9
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 03:00:00"
      },
      {
        "dt": 1740722400,
        "main": {
          "temp": 29.38,
          "feels_like": 31.2,
          "temp_min": 29.38,
          "temp_max": 29.38,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 986,
          "humidity": 57,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.04,
          "deg": 40,
          "gust": 3.75
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 06:00:00"
      },
      {
        "dt": 1740733200,
        "main": {
          "temp": 25.7,
          "feels_like": 26.34,
          "temp_min": 25.7,
          "temp_max": 25.7,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 987,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 2.72,
          "deg": 11,
          "gust": 8.11
        },
        "visibility": 10000,
        "pop": 0.53,
        "rain": {
          "3h": 0.25
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 09:00:00"
      },
      {
        "dt": 1740744000,
        "main": {
          "temp": 21.75,
          "feels_like": 22.46,
          "temp_min": 21.75,
          "temp_max": 21.75,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 989,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 1.77,
          "deg": 2,
          "gust": 2.61
        },
        "visibility": 10000,
        "pop": 0.14,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 12:00:00"
      },
      {
        "dt": 1740754800,
        "main": {
          "temp": 21.43,
          "feels_like": 22.14,
          "temp_min": 21.43,
          "temp_max": 21.43,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 989,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 1.42,
          "deg": 354,
          "gust": 1.17
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 15:00:00"
      },
      {
        "dt": 1740765600,
        "main": {
          "temp": 21.33,
          "feels_like": 22.03,
          "temp_min": 21.33,
          "temp_max": 21.33,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 96,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 1.33,
          "deg": 3,
          "gust": 1.43
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 18:00:00"
      },
      {
        "dt": 1740776400,
        "main": {
          "temp": 21.22,
          "feels_like": 21.93,
          "temp_min": 21.22,
          "temp_max": 21.22,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.43,
          "deg": 7,
          "gust": 1.56
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 21:00:00"
      },
      {
        "dt": 1740787200,
        "main": {
          "temp": 24.79,
          "feels_like": 25.44,
          "temp_min": 24.79,
          "temp_max": 24.79,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 990,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.13,
          "deg": 355,
          "gust": 2.02
        },
        "visibility": 10000,
        "pop": 0.24,
        "rain": {
          "3h": 0.15
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 00:00:00"
      },
      {
        "dt": 1740798000,
        "main": {
          "temp": 30.51,
          "feels_like": 32.57,
          "temp_min": 30.51,
          "temp_max": 30.51,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 1.26,
          "deg": 146,
          "gust": 2.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 03:00:00"
      },
      {
        "dt": 1740808800,
        "main": {
          "temp": 27.51,
          "feels_like": 30.19,
          "temp_min": 27.51,
          "temp_max": 27.51,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 985,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 91
        },
        "wind": {
          "speed": 1.06,
          "deg": 151,
          "gust": 1.47
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 1.86
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 06:00:00"
      },
      {
        "dt": 1740819600,
        "main": {
          "temp": 23.96,
          "feels_like": 24.84,
          "temp_min": 23.96,
          "temp_max": 23.96,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 986,
          "humidity": 93,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 0.78,
          "deg": 54,
          "gust": 1.16
        },
        "visibility": 9814,
        "pop": 1,
        "rain": {
          "3h": 2.8
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 09:00:00"
      },
      {
        "dt": 1740830400,
        "main": {
          "temp": 21.81,
          "feels_like": 22.58,
          "temp_min": 21.81,
          "temp_max": 21.81,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 988,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 1.48,
          "deg": 5,
          "gust": 1.07
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 1.68
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 12:00:00"
      },
      {
        "dt": 1740841200,
        "main": {
          "temp": 21.23,
          "feels_like": 21.97,
          "temp_min": 21.23,
          "temp_max": 21.23,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 989,
          "humidity": 98,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.4,
          "deg": 0,
          "gust": 1.24
        },
        "visibility": 10000,
        "pop": 0.07,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 15:00:00"
      },
      {
        "dt": 1740852000,
        "main": {
          "temp": 20.9,
          "feels_like": 21.63,
          "temp_min": 20.9,
          "temp_max": 20.9,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 987,
          "humidity": 99,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.46,
          "deg": 357,
          "gust": 1.57
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 18:00:00"
      },
      {
        "dt": 1740862800,
        "main": {
          "temp": 20.48,
          "feels_like": 21.17,
          "temp_min": 20.48,
          "temp_max": 20.48,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 987,
          "humidity": 99,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 70
        },
        "wind": {
          "speed": 1.45,
          "deg": 6,
          "gust": 1.39
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 21:00:00"
      },
      {
        "dt": 1740873600,
        "main": {
          "temp": 24.07,
          "feels_like": 24.83,
          "temp_min": 24.07,
          "temp_max": 24.07,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 989,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 76
        },
        "wind": {
          "speed": 1.29,
          "deg": 354,
          "gust": 2.02
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 00:00:00"
      },
      {
        "dt": 1740884400,
        "main": {
          "temp": 30.8,
          "feels_like": 33.08,
          "temp_min": 30.8,
          "temp_max": 30.8,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 57
        },
        "wind": {
          "speed": 1.02,
          "deg": 174,
          "gust": 1.54
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.13
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 03:00:00"
      },
      {
        "dt": 1740895200,
        "main": {
          "temp": 27,
          "feels_like": 29.2,
          "temp_min": 27,
          "temp_max": 27,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 985,
          "humidity": 74,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 78
        },
        "wind": {
          "speed": 0.2,
          "deg": 189,
          "gust": 1.51
        },
        "visibility": 10000,
        "pop": 0.91,
        "rain": {
          "3h": 0.91
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 06:00:00"
      },
      {
        "dt": 1740906000,
        "main": {
          "temp": 25.9,
          "feels_like": 26.71,
          "temp_min": 25.9,
          "temp_max": 25.9,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 985,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 71
        },
        "wind": {
          "speed": 0.69,
          "deg": 348,
          "gust": 1.53
        },
        "visibility": 10000,
        "pop": 0.98,
        "rain": {
          "3h": 1.82
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 09:00:00"
      },
      {
        "dt": 1740916800,
        "main": {
          "temp": 21.75,
          "feels_like": 22.46,
          "temp_min": 21.75,
          "temp_max": 21.75,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 987,
          "humidity": 95,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 79
        },
        "wind": {
          "speed": 1.69,
          "deg": 10,
          "gust": 1.35
        },
        "visibility": 10000,
        "pop": 0.95,
        "rain": {
          "3h": 0.15
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 12:00:00"
      },
      {
        "dt": 1740927600,
        "main": {
          "temp": 21.4,
          "feels_like": 22.13,
          "temp_min": 21.4,
          "temp_max": 21.4,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.31,
          "deg": 352,
          "gust": 1.35
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 15:00:00"
      },
      {
        "dt": 1740938400,
        "main": {
          "temp": 21.01,
          "feels_like": 21.75,
          "temp_min": 21.01,
          "temp_max": 21.01,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 986,
          "humidity": 99,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.21,
          "deg": 350,
          "gust": 1.2
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 18:00:00"
      },
      {
        "dt": 1740949200,
        "main": {
          "temp": 20.84,
          "feels_like": 21.59,
          "temp_min": 20.84,
          "temp_max": 20.84,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 986,
          "humidity": 100,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 1.21,
          "deg": 350,
          "gust": 1.02
        },
        "visibility": 10000,
        "pop": 0.28,
        "rain": {
          "3h": 0.25
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 21:00:00"
      },
      {
        "dt": 1740960000,
        "main": {
          "temp": 24.93,
          "feels_like": 25.65,
          "temp_min": 24.93,
          "temp_max": 24.93,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 988,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 84
        },
        "wind": {
          "speed": 0.82,
          "deg": 10,
          "gust": 1.29
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 00:00:00"
      },
      {
        "dt": 1740970800,
        "main": {
          "temp": 30.79,
          "feels_like": 33.07,
          "temp_min": 30.79,
          "temp_max": 30.79,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 986,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 72
        },
        "wind": {
          "speed": 1.69,
          "deg": 185,
          "gust": 1.59
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 03:00:00"
      },
      {
        "dt": 1740981600,
        "main": {
          "temp": 28.54,
          "feels_like": 31.13,
          "temp_min": 28.54,
          "temp_max": 28.54,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 984,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 0.64,
          "deg": 184,
          "gust": 0.91
        },
        "visibility": 10000,
        "pop": 0.6,
        "rain": {
          "3h": 0.67
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 06:00:00"
      },
      {
        "dt": 1740992400,
        "main": {
          "temp": 25.93,
          "feels_like": 26.8,
          "temp_min": 25.93,
          "temp_max": 25.93,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 984,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 81
        },
        "wind": {
          "speed": 0.57,
          "deg": 147,
          "gust": 1.17
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 1.89
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 09:00:00"
      },
      {
        "dt": 1741003200,
        "main": {
          "temp": 22.17,
          "feels_like": 22.98,
          "temp_min": 22.17,
          "temp_max": 22.17,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 986,
          "humidity": 97,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 91
        },
        "wind": {
          "speed": 1.34,
          "deg": 23,
          "gust": 1.11
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 1.17
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-03 12:00:00"
      }
    ],
    "city": {
      "id": 1623890,
      "name": "Totopo",
      "coord": {
        "lat": 0.5717,
        "lon": 122.6365
      },
      "country": "ID",
      "population": 1000,
      "timezone": 28800,
      "sunrise": 1740520774,
      "sunset": 1740564335
    }
  },
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1740582000,
        "main": {
          "temp": 26.96,
          "feels_like": 30.62,
          "temp_min": 24.94,
          "temp_max": 26.96,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 90,
          "temp_kf": 2.02
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 2.61,
          "deg": 107,
          "gust": 2.77
        },
        "visibility": 10000,
        "pop": 0.19,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 15:00:00"
      },
      {
        "dt": 1740592800,
        "main": {
          "temp": 26.15,
          "feels_like": 26.15,
          "temp_min": 24.53,
          "temp_max": 26.15,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1002,
          "humidity": 89,
          "temp_kf": 1.62
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 13
        },
        "wind": {
          "speed": 2.57,
          "deg": 108,
          "gust": 2.49
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 18:00:00"
      },
      {
        "dt": 1740603600,
        "main": {
          "temp": 25.07,
          "feels_like": 25.93,
          "temp_min": 24.13,
          "temp_max": 25.07,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 88,
          "temp_kf": 0.94
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 2.07,
          "deg": 117,
          "gust": 2.21
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 21:00:00"
      },
      {
        "dt": 1740614400,
        "main": {
          "temp": 26.19,
          "feels_like": 26.19,
          "temp_min": 26.19,
          "temp_max": 26.19,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1004,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 16
        },
        "wind": {
          "speed": 1.84,
          "deg": 106,
          "gust": 1.68
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 00:00:00"
      },
      {
        "dt": 1740625200,
        "main": {
          "temp": 29.21,
          "feels_like": 33.19,
          "temp_min": 29.21,
          "temp_max": 29.21,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1002,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 17
        },
        "wind": {
          "speed": 1.76,
          "deg": 222,
          "gust": 2.63
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 03:00:00"
      },
      {
        "dt": 1740636000,
        "main": {
          "temp": 30.16,
          "feels_like": 34.46,
          "temp_min": 30.16,
          "temp_max": 30.16,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 66,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 9
        },
        "wind": {
          "speed": 3.09,
          "deg": 241,
          "gust": 3.3
        },
        "visibility": 10000,
        "pop": 0.97,
        "rain": {
          "3h": 1.01
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 06:00:00"
      },
      {
        "dt": 1740646800,
        "main": {
          "temp": 28.73,
          "feels_like": 33.41,
          "temp_min": 28.73,
          "temp_max": 28.73,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 1.76,
          "deg": 208,
          "gust": 1.87
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 1.78
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 09:00:00"
      },
      {
        "dt": 1740657600,
        "main": {
          "temp": 25.7,
          "feels_like": 26.49,
          "temp_min": 25.7,
          "temp_max": 25.7,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 3
        },
        "wind": {
          "speed": 2.22,
          "deg": 112,
          "gust": 2.49
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 0.88
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 12:00:00"
      },
      {
        "dt": 1740668400,
        "main": {
          "temp": 24.82,
          "feels_like": 25.6,
          "temp_min": 24.82,
          "temp_max": 24.82,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 5
        },
        "wind": {
          "speed": 2.01,
          "deg": 67,
          "gust": 1.91
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 15:00:00"
      },
      {
        "dt": 1740679200,
        "main": {
          "temp": 24.51,
          "feels_like": 25.26,
          "temp_min": 24.51,
          "temp_max": 24.51,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 4
        },
        "wind": {
          "speed": 2.27,
          "deg": 76,
          "gust": 2.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 18:00:00"
      },
      {
        "dt": 1740690000,
        "main": {
          "temp": 24.35,
          "feels_like": 25.06,
          "temp_min": 24.35,
          "temp_max": 24.35,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 4
        },
        "wind": {
          "speed": 2.02,
          "deg": 31,
          "gust": 2.06
        },
        "visibility": 10000,
        "pop": 0.03,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 21:00:00"
      },
      {
        "dt": 1740700800,
        "main": {
          "temp": 26.73,
          "feels_like": 29.15,
          "temp_min": 26.73,
          "temp_max": 26.73,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 2.13,
          "deg": 19,
          "gust": 2.78
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 00:00:00"
      },
      {
        "dt": 1740711600,
        "main": {
          "temp": 29.19,
          "feels_like": 32.76,
          "temp_min": 29.19,
          "temp_max": 29.19,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 1.53,
          "deg": 298,
          "gust": 2.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 03:00:00"
      },
      {
        "dt": 1740722400,
        "main": {
          "temp": 28.23,
          "feels_like": 32.03,
          "temp_min": 28.23,
          "temp_max": 28.23,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 18
        },
        "wind": {
          "speed": 3.41,
          "deg": 289,
          "gust": 2.33
        },
        "visibility": 10000,
        "pop": 0.73,
        "rain": {
          "3h": 0.93
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 06:00:00"
      },
      {
        "dt": 1740733200,
        "main": {
          "temp": 26.9,
          "feels_like": 29.88,
          "temp_min": 26.9,
          "temp_max": 26.9,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 51
        },
        "wind": {
          "speed": 0.91,
          "deg": 266,
          "gust": 0.76
        },
        "visibility": 10000,
        "pop": 1,
        "rain": {
          "3h": 1.86
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 09:00:00"
      },
      {
        "dt": 1740744000,
        "main": {
          "temp": 26.3,
          "feels_like": 26.3,
          "temp_min": 26.3,
          "temp_max": 26.3,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 53
        },
        "wind": {
          "speed": 2.59,
          "deg": 123,
          "gust": 3.48
        },
        "visibility": 10000,
        "pop": 0.98,
        "rain": {
          "3h": 0.47
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 12:00:00"
      },
      {
        "dt": 1740754800,
        "main": {
          "temp": 25.19,
          "feels_like": 26.04,
          "temp_min": 25.19,
          "temp_max": 25.19,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 1003,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 52
        },
        "wind": {
          "speed": 3.08,
          "deg": 109,
          "gust": 4.04
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 15:00:00"
      },
      {
        "dt": 1740765600,
        "main": {
          "temp": 24.89,
          "feels_like": 25.73,
          "temp_min": 24.89,
          "temp_max": 24.89,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 2.67,
          "deg": 69,
          "gust": 2.99
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 18:00:00"
      },
      {
        "dt": 1740776400,
        "main": {
          "temp": 24.54,
          "feels_like": 25.27,
          "temp_min": 24.54,
          "temp_max": 24.54,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 10
        },
        "wind": {
          "speed": 1.08,
          "deg": 61,
          "gust": 1.12
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 21:00:00"
      },
      {
        "dt": 1740787200,
        "main": {
          "temp": 26.62,
          "feels_like": 26.62,
          "temp_min": 26.62,
          "temp_max": 26.62,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1004,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 9
        },
        "wind": {
          "speed": 1.19,
          "deg": 92,
          "gust": 1.01
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 00:00:00"
      },
      {
        "dt": 1740798000,
        "main": {
          "temp": 29.22,
          "feels_like": 33.02,
          "temp_min": 29.22,
          "temp_max": 29.22,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 8
        },
        "wind": {
          "speed": 1.63,
          "deg": 293,
          "gust": 2.16
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 03:00:00"
      },
      {
        "dt": 1740808800,
        "main": {
          "temp": 28.97,
          "feels_like": 33.04,
          "temp_min": 28.97,
          "temp_max": 28.97,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 32
        },
        "wind": {
          "speed": 3.22,
          "deg": 261,
          "gust": 2.45
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.26
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 06:00:00"
      },
      {
        "dt": 1740819600,
        "main": {
          "temp": 28.1,
          "feels_like": 32.51,
          "temp_min": 28.1,
          "temp_max": 28.1,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 15
        },
        "wind": {
          "speed": 1.07,
          "deg": 234,
          "gust": 0.77
        },
        "visibility": 10000,
        "pop": 0.91,
        "rain": {
          "3h": 1.37
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 09:00:00"
      },
      {
        "dt": 1740830400,
        "main": {
          "temp": 25.89,
          "feels_like": 26.78,
          "temp_min": 25.89,
          "temp_max": 25.89,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 2.65,
          "deg": 112,
          "gust": 3.32
        },
        "visibility": 10000,
        "pop": 0.85,
        "rain": {
          "3h": 0.12
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 12:00:00"
      },
      {
        "dt": 1740841200,
        "main": {
          "temp": 25.18,
          "feels_like": 26.1,
          "temp_min": 25.18,
          "temp_max": 25.18,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 24
        },
        "wind": {
          "speed": 3.37,
          "deg": 109,
          "gust": 4.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 15:00:00"
      },
      {
        "dt": 1740852000,
        "main": {
          "temp": 24.61,
          "feels_like": 25.48,
          "temp_min": 24.61,
          "temp_max": 24.61,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 90,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 33
        },
        "wind": {
          "speed": 3.54,
          "deg": 100,
          "gust": 4.93
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 18:00:00"
      },
      {
        "dt": 1740862800,
        "main": {
          "temp": 24.28,
          "feels_like": 25.01,
          "temp_min": 24.28,
          "temp_max": 24.28,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 86,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 7
        },
        "wind": {
          "speed": 2.39,
          "deg": 63,
          "gust": 2.26
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 21:00:00"
      },
      {
        "dt": 1740873600,
        "main": {
          "temp": 26.73,
          "feels_like": 29,
          "temp_min": 26.73,
          "temp_max": 26.73,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 1002,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 21
        },
        "wind": {
          "speed": 1.18,
          "deg": 47,
          "gust": 1.75
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 00:00:00"
      },
      {
        "dt": 1740884400,
        "main": {
          "temp": 29.02,
          "feels_like": 32.23,
          "temp_min": 29.02,
          "temp_max": 29.02,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 46
        },
        "wind": {
          "speed": 1.84,
          "deg": 278,
          "gust": 1.58
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 03:00:00"
      },
      {
        "dt": 1740895200,
        "main": {
          "temp": 29.54,
          "feels_like": 33.52,
          "temp_min": 29.54,
          "temp_max": 29.54,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 999,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 40
        },
        "wind": {
          "speed": 3.8,
          "deg": 294,
          "gust": 2.41
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 06:00:00"
      },
      {
        "dt": 1740906000,
        "main": {
          "temp": 28.4,
          "feels_like": 32.6,
          "temp_min": 28.4,
          "temp_max": 28.4,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 999,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 74
        },
        "wind": {
          "speed": 2.03,
          "deg": 249,
          "gust": 1.7
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 09:00:00"
      },
      {
        "dt": 1740916800,
        "main": {
          "temp": 26.22,
          "feels_like": 26.22,
          "temp_min": 26.22,
          "temp_max": 26.22,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 81
        },
        "wind": {
          "speed": 2.4,
          "deg": 127,
          "gust": 2.69
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 12:00:00"
      },
      {
        "dt": 1740927600,
        "main": {
          "temp": 25.22,
          "feels_like": 26.1,
          "temp_min": 25.22,
          "temp_max": 25.22,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 3.2,
          "deg": 109,
          "gust": 4.17
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 15:00:00"
      },
      {
        "dt": 1740938400,
        "main": {
          "temp": 24.67,
          "feels_like": 25.49,
          "temp_min": 24.67,
          "temp_max": 24.67,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 93
        },
        "wind": {
          "speed": 3.45,
          "deg": 96,
          "gust": 4.61
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 18:00:00"
      },
      {
        "dt": 1740949200,
        "main": {
          "temp": 24.22,
          "feels_like": 24.81,
          "temp_min": 24.22,
          "temp_max": 24.22,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.69,
          "deg": 70,
          "gust": 1.36
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 21:00:00"
      },
      {
        "dt": 1740960000,
        "main": {
          "temp": 26.78,
          "feels_like": 28.94,
          "temp_min": 26.78,
          "temp_max": 26.78,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 1001,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 78
        },
        "wind": {
          "speed": 1.02,
          "deg": 15,
          "gust": 1.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 00:00:00"
      },
      {
        "dt": 1740970800,
        "main": {
          "temp": 29.79,
          "feels_like": 33.86,
          "temp_min": 29.79,
          "temp_max": 29.79,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 1.34,
          "deg": 284,
          "gust": 2.88
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 03:00:00"
      },
      {
        "dt": 1740981600,
        "main": {
          "temp": 30.19,
          "feels_like": 35.01,
          "temp_min": 30.19,
          "temp_max": 30.19,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 998,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 3.56,
          "deg": 295,
          "gust": 3.52
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 06:00:00"
      },
      {
        "dt": 1740992400,
        "main": {
          "temp": 28.75,
          "feels_like": 33.46,
          "temp_min": 28.75,
          "temp_max": 28.75,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 998,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 12
        },
        "wind": {
          "speed": 2.42,
          "deg": 242,
          "gust": 1.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 09:00:00"
      },
      {
        "dt": 1741003200,
        "main": {
          "temp": 26.38,
          "feels_like": 26.38,
          "temp_min": 26.38,
          "temp_max": 26.38,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 1000,
          "humidity": 84,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 21
        },
        "wind": {
          "speed": 2.52,
          "deg": 118,
          "gust": 2.69
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-03 12:00:00"
      }
    ],
    "city": {
      "id": 2057087,
      "name": "Poto",
      "coord": {
        "lat": -9.9737,
        "lon": 123.6413
      },
      "country": "ID",
      "population": 282396,
      "timezone": 28800,
      "sunrise": 1740520135,
      "sunset": 1740564491
    }
  },
  {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
      {
        "dt": 1740582000,
        "main": {
          "temp": 39.1,
          "feels_like": 37.62,
          "temp_min": 39.1,
          "temp_max": 39.1,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 990,
          "humidity": 18,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.02,
          "deg": 164,
          "gust": 1.81
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-26 15:00:00"
      },
      {
        "dt": 1740592800,
        "main": {
          "temp": 37.37,
          "feels_like": 35.86,
          "temp_min": 33.92,
          "temp_max": 37.37,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 991,
          "humidity": 20,
          "temp_kf": 3.45
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 0.16,
          "deg": 75,
          "gust": 0.99
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 18:00:00"
      },
      {
        "dt": 1740603600,
        "main": {
          "temp": 33.97,
          "feels_like": 33.08,
          "temp_min": 31.41,
          "temp_max": 33.97,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 994,
          "humidity": 29,
          "temp_kf": 2.56
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.51,
          "deg": 148,
          "gust": 2.04
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-26 21:00:00"
      },
      {
        "dt": 1740614400,
        "main": {
          "temp": 31.08,
          "feels_like": 31.48,
          "temp_min": 31.08,
          "temp_max": 31.08,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 993,
          "humidity": 43,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 3.96,
          "deg": 200,
          "gust": 10.06
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 00:00:00"
      },
      {
        "dt": 1740625200,
        "main": {
          "temp": 28.36,
          "feels_like": 30.25,
          "temp_min": 28.36,
          "temp_max": 28.36,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 992,
          "humidity": 62,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.73,
          "deg": 198,
          "gust": 4.21
        },
        "visibility": 10000,
        "pop": 0.07,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 03:00:00"
      },
      {
        "dt": 1740636000,
        "main": {
          "temp": 26.57,
          "feels_like": 26.57,
          "temp_min": 26.57,
          "temp_max": 26.57,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 994,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 1.73,
          "deg": 183,
          "gust": 4.03
        },
        "visibility": 10000,
        "pop": 0.33,
        "rain": {
          "3h": 0.12
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 06:00:00"
      },
      {
        "dt": 1740646800,
        "main": {
          "temp": 31.54,
          "feels_like": 34.22,
          "temp_min": 31.54,
          "temp_max": 31.54,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 996,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.07,
          "deg": 175,
          "gust": 2.18
        },
        "visibility": 10000,
        "pop": 0.19,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 09:00:00"
      },
      {
        "dt": 1740657600,
        "main": {
          "temp": 38.71,
          "feels_like": 40.34,
          "temp_min": 38.71,
          "temp_max": 38.71,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 993,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 0.31,
          "deg": 122,
          "gust": 1.47
        },
        "visibility": 10000,
        "pop": 0.05,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 12:00:00"
      },
      {
        "dt": 1740668400,
        "main": {
          "temp": 36.03,
          "feels_like": 37,
          "temp_min": 36.03,
          "temp_max": 36.03,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 990,
          "humidity": 33,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 1.69,
          "deg": 123,
          "gust": 1.93
        },
        "visibility": 10000,
        "pop": 0.08,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-27 15:00:00"
      },
      {
        "dt": 1740679200,
        "main": {
          "temp": 33.29,
          "feels_like": 33.81,
          "temp_min": 33.29,
          "temp_max": 33.29,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 991,
          "humidity": 38,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 0.57,
          "deg": 142,
          "gust": 3.53
        },
        "visibility": 10000,
        "pop": 0.04,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 18:00:00"
      },
      {
        "dt": 1740690000,
        "main": {
          "temp": 30.38,
          "feels_like": 31.13,
          "temp_min": 30.38,
          "temp_max": 30.38,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 993,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 38
        },
        "wind": {
          "speed": 1.19,
          "deg": 201,
          "gust": 1.33
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-27 21:00:00"
      },
      {
        "dt": 1740700800,
        "main": {
          "temp": 29.11,
          "feels_like": 29.8,
          "temp_min": 29.11,
          "temp_max": 29.11,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 992,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 33
        },
        "wind": {
          "speed": 0.3,
          "deg": 197,
          "gust": 0.57
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 00:00:00"
      },
      {
        "dt": 1740711600,
        "main": {
          "temp": 27.79,
          "feels_like": 28.57,
          "temp_min": 27.79,
          "temp_max": 27.79,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 991,
          "humidity": 54,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 91
        },
        "wind": {
          "speed": 0.97,
          "deg": 261,
          "gust": 0.98
        },
        "visibility": 10000,
        "pop": 0.01,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 03:00:00"
      },
      {
        "dt": 1740722400,
        "main": {
          "temp": 27.12,
          "feels_like": 28.08,
          "temp_min": 27.12,
          "temp_max": 27.12,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 993,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 85
        },
        "wind": {
          "speed": 0.64,
          "deg": 163,
          "gust": 0.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 06:00:00"
      },
      {
        "dt": 1740733200,
        "main": {
          "temp": 34.25,
          "feels_like": 35.6,
          "temp_min": 34.25,
          "temp_max": 34.25,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 995,
          "humidity": 39,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 52
        },
        "wind": {
          "speed": 1.46,
          "deg": 155,
          "gust": 1.33
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 09:00:00"
      },
      {
        "dt": 1740744000,
        "main": {
          "temp": 39.68,
          "feels_like": 39.54,
          "temp_min": 39.68,
          "temp_max": 39.68,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 992,
          "humidity": 22,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 57
        },
        "wind": {
          "speed": 1.94,
          "deg": 133,
          "gust": 2.79
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 12:00:00"
      },
      {
        "dt": 1740754800,
        "main": {
          "temp": 40.18,
          "feels_like": 38.75,
          "temp_min": 40.18,
          "temp_max": 40.18,
          "pressure": 1004,
          "sea_level": 1004,
          "grnd_level": 988,
          "humidity": 17,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 2.35,
          "deg": 118,
          "gust": 2.85
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-02-28 15:00:00"
      },
      {
        "dt": 1740765600,
        "main": {
          "temp": 34.99,
          "feels_like": 33.29,
          "temp_min": 34.99,
          "temp_max": 34.99,
          "pressure": 1005,
          "sea_level": 1005,
          "grnd_level": 989,
          "humidity": 22,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 60
        },
        "wind": {
          "speed": 1.68,
          "deg": 119,
          "gust": 2.17
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 18:00:00"
      },
      {
        "dt": 1740776400,
        "main": {
          "temp": 32.46,
          "feels_like": 30.8,
          "temp_min": 32.46,
          "temp_max": 32.46,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 990,
          "humidity": 25,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 54
        },
        "wind": {
          "speed": 0.98,
          "deg": 128,
          "gust": 1.13
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-02-28 21:00:00"
      },
      {
        "dt": 1740787200,
        "main": {
          "temp": 29.89,
          "feels_like": 28.58,
          "temp_min": 29.89,
          "temp_max": 29.89,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 991,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 51
        },
        "wind": {
          "speed": 1.34,
          "deg": 211,
          "gust": 1.65
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 00:00:00"
      },
      {
        "dt": 1740798000,
        "main": {
          "temp": 27.43,
          "feels_like": 27.99,
          "temp_min": 27.43,
          "temp_max": 27.43,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 990,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 58
        },
        "wind": {
          "speed": 1.31,
          "deg": 199,
          "gust": 1.4
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 03:00:00"
      },
      {
        "dt": 1740808800,
        "main": {
          "temp": 25.97,
          "feels_like": 25.97,
          "temp_min": 25.97,
          "temp_max": 25.97,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 993,
          "humidity": 73,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 65
        },
        "wind": {
          "speed": 1.81,
          "deg": 148,
          "gust": 5.36
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 06:00:00"
      },
      {
        "dt": 1740819600,
        "main": {
          "temp": 32.26,
          "feels_like": 35.63,
          "temp_min": 32.26,
          "temp_max": 32.26,
          "pressure": 1011,
          "sea_level": 1011,
          "grnd_level": 994,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 70
        },
        "wind": {
          "speed": 2.63,
          "deg": 182,
          "gust": 2.83
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 09:00:00"
      },
      {
        "dt": 1740830400,
        "main": {
          "temp": 38.61,
          "feels_like": 40.16,
          "temp_min": 38.61,
          "temp_max": 38.61,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 991,
          "humidity": 29,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 2.14,
          "deg": 174,
          "gust": 2.53
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 12:00:00"
      },
      {
        "dt": 1740841200,
        "main": {
          "temp": 40.86,
          "feels_like": 40.28,
          "temp_min": 40.86,
          "temp_max": 40.86,
          "pressure": 1004,
          "sea_level": 1004,
          "grnd_level": 988,
          "humidity": 19,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 73
        },
        "wind": {
          "speed": 1.12,
          "deg": 139,
          "gust": 2.73
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-01 15:00:00"
      },
      {
        "dt": 1740852000,
        "main": {
          "temp": 35.08,
          "feels_like": 33.69,
          "temp_min": 35.08,
          "temp_max": 35.08,
          "pressure": 1005,
          "sea_level": 1005,
          "grnd_level": 989,
          "humidity": 24,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 52
        },
        "wind": {
          "speed": 1.56,
          "deg": 110,
          "gust": 2.19
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 18:00:00"
      },
      {
        "dt": 1740862800,
        "main": {
          "temp": 32.46,
          "feels_like": 31.11,
          "temp_min": 32.46,
          "temp_max": 32.46,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 990,
          "humidity": 28,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 15
        },
        "wind": {
          "speed": 0.58,
          "deg": 177,
          "gust": 0.68
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-01 21:00:00"
      },
      {
        "dt": 1740873600,
        "main": {
          "temp": 29.91,
          "feels_like": 30.2,
          "temp_min": 29.91,
          "temp_max": 29.91,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 990,
          "humidity": 45,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 29
        },
        "wind": {
          "speed": 2.6,
          "deg": 214,
          "gust": 7.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 00:00:00"
      },
      {
        "dt": 1740884400,
        "main": {
          "temp": 27.17,
          "feels_like": 29.06,
          "temp_min": 27.17,
          "temp_max": 27.17,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 990,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ],
        "clouds": {
          "all": 14
        },
        "wind": {
          "speed": 1.02,
          "deg": 252,
          "gust": 1.39
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 03:00:00"
      },
      {
        "dt": 1740895200,
        "main": {
          "temp": 26.23,
          "feels_like": 26.23,
          "temp_min": 26.23,
          "temp_max": 26.23,
          "pressure": 1009,
          "sea_level": 1009,
          "grnd_level": 992,
          "humidity": 78,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 38
        },
        "wind": {
          "speed": 1.04,
          "deg": 182,
          "gust": 3.05
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 06:00:00"
      },
      {
        "dt": 1740906000,
        "main": {
          "temp": 33.08,
          "feels_like": 36.45,
          "temp_min": 33.08,
          "temp_max": 33.08,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 994,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 1.84,
          "deg": 256,
          "gust": 2.23
        },
        "visibility": 10000,
        "pop": 0.24,
        "rain": {
          "3h": 0.17
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 09:00:00"
      },
      {
        "dt": 1740916800,
        "main": {
          "temp": 41.46,
          "feels_like": 43.16,
          "temp_min": 41.46,
          "temp_max": 41.46,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 991,
          "humidity": 24,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 41
        },
        "wind": {
          "speed": 0.66,
          "deg": 298,
          "gust": 3.61
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 12:00:00"
      },
      {
        "dt": 1740927600,
        "main": {
          "temp": 41.44,
          "feels_like": 41.11,
          "temp_min": 41.44,
          "temp_max": 41.44,
          "pressure": 1002,
          "sea_level": 1002,
          "grnd_level": 987,
          "humidity": 19,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 29
        },
        "wind": {
          "speed": 1.99,
          "deg": 118,
          "gust": 4.53
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-02 15:00:00"
      },
      {
        "dt": 1740938400,
        "main": {
          "temp": 36.07,
          "feels_like": 35.14,
          "temp_min": 36.07,
          "temp_max": 36.07,
          "pressure": 1004,
          "sea_level": 1004,
          "grnd_level": 988,
          "humidity": 25,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 2.32,
          "deg": 134,
          "gust": 5.03
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 18:00:00"
      },
      {
        "dt": 1740949200,
        "main": {
          "temp": 32.87,
          "feels_like": 31.98,
          "temp_min": 32.87,
          "temp_max": 32.87,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 990,
          "humidity": 31,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 30
        },
        "wind": {
          "speed": 1.88,
          "deg": 163,
          "gust": 3.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-02 21:00:00"
      },
      {
        "dt": 1740960000,
        "main": {
          "temp": 29.41,
          "feels_like": 31.41,
          "temp_min": 29.41,
          "temp_max": 29.41,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 990,
          "humidity": 58,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 44
        },
        "wind": {
          "speed": 2.01,
          "deg": 217,
          "gust": 5.29
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-03 00:00:00"
      },
      {
        "dt": 1740970800,
        "main": {
          "temp": 27.1,
          "feels_like": 29.03,
          "temp_min": 27.1,
          "temp_max": 27.1,
          "pressure": 1006,
          "sea_level": 1006,
          "grnd_level": 989,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 54
        },
        "wind": {
          "speed": 0.16,
          "deg": 74,
          "gust": 0.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2025-03-03 03:00:00"
      },
      {
        "dt": 1740981600,
        "main": {
          "temp": 26.1,
          "feels_like": 26.1,
          "temp_min": 26.1,
          "temp_max": 26.1,
          "pressure": 1008,
          "sea_level": 1008,
          "grnd_level": 991,
          "humidity": 75,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 70
        },
        "wind": {
          "speed": 1.48,
          "deg": 186,
          "gust": 2.9
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 06:00:00"
      },
      {
        "dt": 1740992400,
        "main": {
          "temp": 33.83,
          "feels_like": 36.77,
          "temp_min": 33.83,
          "temp_max": 33.83,
          "pressure": 1010,
          "sea_level": 1010,
          "grnd_level": 993,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 75
        },
        "wind": {
          "speed": 1.27,
          "deg": 165,
          "gust": 1.31
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 09:00:00"
      },
      {
        "dt": 1741003200,
        "main": {
          "temp": 40.73,
          "feels_like": 42.33,
          "temp_min": 40.73,
          "temp_max": 40.73,
          "pressure": 1007,
          "sea_level": 1007,
          "grnd_level": 991,
          "humidity": 25,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 61
        },
        "wind": {
          "speed": 1.08,
          "deg": 125,
          "gust": 3.76
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2025-03-03 12:00:00"
      }
    ],
    "city": {
      "id": 2346632,
      "name": "Toto",
      "coord": {
        "lat": 8.3862,
        "lon": 7.0798
      },
      "country": "NG",
      "population": 9913,
      "timezone": 3600,
      "sunrise": 1740548790,
      "sunset": 1740591780
    }
  }
]


export default FORECASTS


