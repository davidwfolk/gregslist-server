import { dbContext } from "../db/DbContext";


class HousesService {
  async create(body) {
    let car = await dbContext.Houses.create(body)
    return car
  }

  async getAll() {
    let cars = await dbContext.Houses.find()
    return cars
  }
}

export const housesService = new HousesService()