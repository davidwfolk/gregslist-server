import { dbContext } from "../db/DbContext";


class CarsService {
  async create(body) {
    let car = await dbContext.Cars.create(body)
    return car
  }

  async getAll() {
    let cars = await dbContext.Cars.find()
    return cars
  }
}

export const carsService = new CarsService()