class Random {
    constructor() {
    }

        getRandomNumber = function (min, max)
        {
            if(min>=max)
                throw  new Error("Max should be more than min")
            return min + Math.round(Math.random()*(max-min))
        }

        getRandomElement = function (array)
        {
            if(array == null || array==undefined)
                throw new Error("You have a trouble this your array")
            return array[this.getRandomNumber(0, array.length-1)]
        }
    }

