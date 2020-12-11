const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

  // Inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-20.377939",
    lng: "-43.426315",
    name: "Lar dos meninos",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "897205343",
    images: [
      "https://images.unsplash.com/photo-1573449595343-f5e436ae1091?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1599003037886-f8b50bc290c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
      "https://images.unsplash.com/photo-1590009617786-6d054a2a3c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas das 8h até 18h",
    open_on_weekends: "0"
  })

  // Consultar dados na tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages')
  console.log(selectedOrphanages);

  // Consultar somente 1 orphanato por, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
  console.log(orphanage);

  // Apagar dado da tabela
  //  console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))
})
