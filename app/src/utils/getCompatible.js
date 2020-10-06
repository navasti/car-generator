export const getCompatible = (cars, selectedCar, part) => {
   let compatible = []

   cars.model.forEach(model => {
      if (selectedCar.model === model.name) {
         if (part === "engine") {
            const compatibleEngine = [...model.engineCompatibility]
            compatibleEngine.forEach(type => {
               cars.engine.forEach(engine => {
                  if (type === engine.type) {
                     compatible.push(engine)
                  }
               })
            })
         } else if (part === "gearbox") {
            const compatibleGearbox = [...model.gearboxCompatibility]
            compatibleGearbox.forEach(type => {
               cars.gearbox.forEach(gearbox => {
                  if (type === gearbox.type) {
                     compatible.push(gearbox)
                  }
               })
            })
         } else return null
      }
   })

   return compatible;
}