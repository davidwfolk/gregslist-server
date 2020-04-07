import { dbContext } from "../db/DbContext";


class CarsService {
  async deleteCar(id) {
    // let cars = await dbContext.Cars.deleteOne({_id: id})
    let cars = await dbContext.Cars.findByIdAndDelete(id)

  }
  async findById(id) {
    let car = await dbContext.Cars.findById(id)
  }
  async create(body) {
    let car = await dbContext.Cars.create(body)
    return car
  }

  async getAll() {
    let cars = await dbContext.Cars.find()
    return cars
  }

  async updateCar(id, updatedCar) {
    let cars = await dbContext.Cars.findByIdAndUpdate(id, updatedCar)
    return cars
    // updatedCar = body
  }
}

export const carsService = new CarsService()