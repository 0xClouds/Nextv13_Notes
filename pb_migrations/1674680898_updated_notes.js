migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("osz4bx4ewyb37c8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c7k5ltyg",
    "name": "field",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("osz4bx4ewyb37c8")

  // remove
  collection.schema.removeField("c7k5ltyg")

  return dao.saveCollection(collection)
})
