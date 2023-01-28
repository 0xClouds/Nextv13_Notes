migrate((db) => {
  const collection = new Collection({
    "id": "osz4bx4ewyb37c8",
    "created": "2023-01-25 20:44:03.515Z",
    "updated": "2023-01-25 20:44:03.515Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("osz4bx4ewyb37c8");

  return dao.deleteCollection(collection);
})
