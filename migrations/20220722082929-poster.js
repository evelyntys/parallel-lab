'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('poster', {
    id: {
      type: 'int',
      primaryKey: true, 
      autoIncrement: true, 
      unsigned: true
    },
    title: {
      type: 'string', 
      length: 100,
      notNull: false
    },
    cost: 'int',
    description: 'text',
    date: 'datetime',
    stock: 'int',
    height: 'int',
    width: 'int'
  })
};

exports.down = function(db) {
  return db.dropTable('poster')
};

exports._meta = {
  "version": 1
};
