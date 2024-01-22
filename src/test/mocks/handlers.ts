import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.rawg.io/api/games', (req) => {
    const reqURL = req.request.url
    const url = new URL(reqURL)

    const searchParams = url.searchParams.get('search')

    if (searchParams === 'Mocked Game') {
      return HttpResponse.json({
        results: [
          {
            id: 1,
            name: 'Mocked Game',
            background_image: 'mocked-image-url',
          },
        ],
      })
    } else {
      return HttpResponse.json({
        results: [],
      })
    }
  }),
]
