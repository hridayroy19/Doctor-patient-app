/* eslint-disable @typescript-eslint/no-unused-vars */
type IPagination = {
  page?: number
  limit?: number
}

type IGResponse<T> = {
  meta: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  data: T
}

export const Pagination = (options: IPagination) => {
  const page = Number(options.page) || 1
  const limit = Number(options.limit) || 5
  const skip = (page - 1) * limit

  return { page, limit, skip }
}
