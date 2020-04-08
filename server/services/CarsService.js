import { dbContext } from "../db/DbContext";


class CarsService {
  async delete(id) {
    // let cars = await dbContext.Cars.deleteOne({_id: id})
    let cars = await dbContext.Cars.findByIdAndDelete(id)
    return cars

  }
  async findById(id) {
    let car = await dbContext.Cars.findById(id)
    return car
  }
  async create(body) {
    let car = await dbContext.Cars.create(body)
    return car
  }

  async getAll() {
    let cars = await dbContext.Cars.find()
    return cars
  }

  async updateById(id, updatedCar) {
    let cars = await dbContext.Cars.findByIdAndUpdate(id, updatedCar)
    return cars
    // updatedCar = body
  }
}

export const carsService = new CarsService()