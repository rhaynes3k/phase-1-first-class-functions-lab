// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => [arr[0], arr[1]]

const returnLastTwoDrivers = (arr) => arr.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
  return function fareMultiplier(fare) {
    return fare * int
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr, drivers) => {
  return drivers(arr)
}
