import express from 'express'
import BaseController from "../utils/BaseController";
import { carsService } from "../services/CarsService";
import { BadRequest } from "../utils/Errors";




export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
    .get("", this.getAll)
    .get('/:id', this.findById)
    .post('', this.create)
    .put('/:id', this.updateById)
    .delete('/:id', this.delete)
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
  async findById(req, res, next) {
    try {
      let car = await carsService.findById(req.params.id)
      if (!car) {
        throw new BadRequest("#SputterSputterClunk - Invalid ID")
      }
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

  async updateById(req, res, next) {
    try {
      let editedCar = await carsService.updateById(req.params.id, req.body)
      req.send({data: editedCar, message: "Car updated!"})
    } catch (error) {
      
    }
  }
    
  async delete (req, res, next){
    try {
      let deleteCar = await carsService.delete(req.params.id)
      res.send({data: deleteCar, message:"#ClickClick - Deleted"})
    } catch (error) {
      
    }
  }


}