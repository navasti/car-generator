module.exports = {
   model: [
      {
         name: "PRO RS3",
         cost: 4200,
         gearboxCompatibility: ["Automatic"],
         engineCompatibility: ["Rally", "Dynamic"]
      },
      {
         name: "UBER RS2",
         cost: 3200,
         gearboxCompatibility: ["Automatic"],
         engineCompatibility: ["Rally", "Dynamic", "Optimum", "Economic"]
      },
      {
         name: "STANDARD",
         cost: 2200,
         gearboxCompatibility: ["Automatic", "Manual"],
         engineCompatibility: ["Dynamic", "Optimum", "Economic"]

      },
      {
         name: "WK",
         cost: 1800,
         gearboxCompatibility: ["Automatic", "Manual"],
         engineCompatibility: ["Optimum", "Economic"]
      },
   ],
   engine: [
      {
         type: "Rally",
         power: "5.2L 532BHP",
         cost: 1800
      },
      {
         type: "Dynamic",
         power: "3.0L 220BHP",
         cost: 1300
      },
      {

         type: "Optimum",
         power: "2.0L 160BHP",
         cost: 800
      },
      {

         type: "Economic",
         power: "1.6L 95BHP",
         cost: 500
      },
   ],
   gearbox: [
      {
         type: "Manual",
         cost: 400
      },
      {
         type: "Automatic",
         cost: 650
      },
   ],
   color: [
      {
         name: "AntiqueWhite",
         cost: 120
      },
      {
         name: "DarkKhaki",
         cost: 140
      },
      {
         name: "LightSalmon",
         cost: 160
      },
      {
         name: "SkyBlue",
         cost: 165
      },
      {
         name: "Silver",
         cost: 110
      },
      {
         name: "CornflowerBlue",
         cost: 130
      },
      {
         name: "HotPink",
         cost: 135
      },
      {
         name: "Tan",
         cost: 140
      },
   ]
}