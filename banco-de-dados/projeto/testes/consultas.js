const db = require('../config/db')

db('tb_perfis')
  .returning('*')
  .then(res => res.map(p => p.nome))
  .then(nomes => console.log(nomes))
  .finally(() => db.destroy())

// db('tb_perfis').select('nome', 'id')
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

// db.select('nome', 'id')
//   .from('tb_perfis')
//   .limit(3)
//   .offset(2)
//   .then(res => console.log(res))
//   .finally(() => db.destroy())

db('tb_perfis')
  // .where({ id: 2 })
  // .where('id', '=', 2)
  // .where('nome', 'like', 'ad%')
  // .whereNot({ id: 2 })
  .whereIn('id', [1,2,3])

  // .first()
  .then(res => console.log(res))
  .finally(() => db.destroy())