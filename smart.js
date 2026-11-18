.use inventoryDB

db.products.insertMany([
  { name: "Laptop", category: "Electronics", price: 45000, stock: 10 },
  { name: "Mouse", category: "Accessories", price: 500, stock: 25 },
  { name: "Keyboard", category: "Accessories", price: 1000, stock: 15 }
])

db.products.find({ stock: { $gt: 0 } })

db.products.updateOne(
  { name: "Laptop" },
  { $set: { stock: 8 } }
)

db.products.createIndex({ name: 1 })