import express from 'express'
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HouseService.js";




export class HouseController extends BaseController {
  constructor() {
    super("api/houses")
    this.router
      .get("", this.getAll)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      let cars = await housesService.getAll()
      res.send({ data: cars, message: "This is where the houses live, get you one!" })
    } catch (error) {
      next(error)
    }

    //NOTE these are the same
    // carsService.getAll().then(cars=>{
    // res.send(cars)
    // }).catch(err => next(err))
  }

  async create(req, res, next) {
    try {
      let car = await housesService.create(req.body)
      res.send({ data: car, message: "house posted!" })
    } catch (err) {
      next(err)
    }
  }



}