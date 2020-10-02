module.exports = {
   model: [
      {
         name: "PRO RS3",
         img: ".png",
         cost: 4200,
         gearboxCompatibility: ["Automatic"],
         engineCompatibility: ["rally", "dynamic"]
      },
      {
         name: "UBER RS2",
         img: ".jpg",
         cost: 1200,
         gearboxCompatibility: ["Automatic"],
         engineCompatibility: ["rally", "dynamic", "optimum", "economic"]
      },
      {
         name: "STANDARD",
         img: ".jpg",
         cost: 2200,
         gearboxCompatibility: ["Automatic", "Manual"],
         engineCompatibility: ["dynamic", "optimum", "economic"]

      },
      {
         name: "WK",
         img: ".jpg",
         cost: 3200,
         gearboxCompatibility: ["Automatic", "Manual"],
         engineCompatibility: ["optimum", "economic"]
      },
   ],
   engine: [
      {
         type: "rally",
         power: "5.2L 532BHP",
         cost: 1800
      },
      {
         type: "dynamic",
         power: "3.0L 220BHP",
         cost: 1300
      },
      {

         type: "optimum",
         power: "2.0L 160BHP",
         cost: 800
      },
      {

         type: "economic",
         power: "1.6L 95BHP",
         cost: 500
      },
   ],
   gearbox: [
      "Manual",
      "Automatic",
   ],
   color: [
      "AntiqueWhite",
      "DarkKhaki",
      "DarkSlateGrey",
      "Teal",
      "Silver",
      "Black"
   ]
}