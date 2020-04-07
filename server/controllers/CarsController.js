import express from 'express'
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";




export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
    .get("", this.getAll)
    .get('/:id', this.getCarById)
    .post('', this.create)
    .put('/:id', this.updateCar)
    .delete('/:id', this.deleteCar)
  }
  
  async getAll(req, res, next) {
    try {
      let cars = await carsService.getAll()
      res.send({ data: cars, message: "This is where the cars live, get you one!" })
    } catch (error) {
      next(error)
    }
    
    //NOTE these are the same
    // carsService.getAll().then(cars=>{
      // res.send(cars)
      // }).catch(err => next(err))
    }
  async getCarById(req, res, next) {
    try {
      let car = await carsService.findById(req.params.id)
      res.send({ data: car, message: "here's your car!" })
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let car = await carsService.create(req.body)
      res.send({ data: car, message: "car created!" })
    } catch (err) {
      next(err)
    }
  }

  async updateCar(req, res, next) {
    try {
      let editedCar = await carsService.updateCar(req.params.id, req.body)
      req.send({data: editedCar, new: true, message: "Car updated!"})
    } catch (error) {
      
    }
  }
    
  async deleteCar (req, res, next){
    try {
      let deleteCar = await carsService.deleteCar(req.params.id)
      res.delete({data: deleteCar, message:"#ClickClick - Deleted"})
    } catch (error) {
      
    }
  }


}