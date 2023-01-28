migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("osz4bx4ewyb37c8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6utpf5hh",
    "name": "info",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xbbxglel",
    "name": "date",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukrvdv89",
    "name": "noteTitle",
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
  collection.schema.removeField("6utpf5hh")

  // remove
  collection.schema.removeField("xbbxglel")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukrvdv89",
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
})
