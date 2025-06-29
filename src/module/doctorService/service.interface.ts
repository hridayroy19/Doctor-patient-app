export interface IService {
  title: string
  description: string
  price: number
  duration: number
  doctorId: string | undefined
}

export interface IServiceUpdate {
  title: string
  description: string
  price: number
  duration: number
}
