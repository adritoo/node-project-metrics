import { LevelDB } from "./leveldb"
import WriteStream from 'level-ws'

export class Metric {
  public timestamp: string
  public value: number

  constructor(ts: string, v: number) {
    this.timestamp = ts
    this.value = v
  }
}

export class MetricsHandler {
  private db: any 
  
  constructor(dbPath: string) {
    this.db = LevelDB.open(dbPath)
  }
  
  public save(key: string, metrics: Metric[], callback: (error: Error | null) => void) { // ajouter les métrics d'un id
    const stream = WriteStream(this.db)
    stream.on('error', callback)
    stream.on('close', callback)
    metrics.forEach((m: Metric) => {
      stream.write({ key: `metric:${key}:${m.timestamp}`, value: m.value })
    })
    stream.end()
    console.log("value2: "+metrics[metrics.length-1].value)

  }

  public add(name: string, key: string, value2: number, callback: (error: Error | null, result?: Metric) => void) { // ajouter les métrics d'un id
    const stream = this.db.createReadStream()
    var met: Metric[] = []
    console.log("Keyyyyy: "+key)
    const [m, k2, timestamp2] = key.split(":");
    console.log("Tiiiiime: "+timestamp2)
    var metric = new Metric(timestamp2, value2);
  
    stream.on('error', callback)
      .on('data', (data: any) => {
        const [_, k, timestamp] = data.key.split(":")
        const value = data.value
        if (name != k) {
          console.log(`LevelDB error: ${k} does not match key ${name}`)
        } else {
          met.push(new Metric(timestamp, value))
        }
      })
      .on('end', (err: Error) => {
        callback(null, metric);
      })
      .on("close", () => {
        console.log("Stream ended");
      });
      met.push(metric);
      console.log("value: "+met[met.length-1].value);
      this.save(name, met, (err: Error | null) => {
        if (err) throw err
        console.log('Data updated')
        //res.status(200).send()
      })
  }
  
  public get(key: string, callback: (err: Error | null, result?: Metric[]) => void) { // récupérer les métrics d'un id
    const stream = this.db.createReadStream()
    var met: Metric[] = []
    
    stream.on('error', callback)
      .on('data', (data: any) => {
        const [m, k, timestamp] = data.key.split(":")
        const value = data.value
        if (key != k) {
          console.log(`LevelDB error: ${k} does not match key ${key}`)
        } else {
          met.push(new Metric(timestamp, value))
        }
      })
      .on('end', (err: Error) => {
        callback(null, met)
      })
      .on("close", () => {
        console.log("Stream ended");
      });
  }
  

  public del(key: string, callback: (error: Error | null, result?: Metric) => void) {// supprimer une metric à partir de sa key (metric:Pierre:150016064)
    const stream = this.db.createReadStream()
    var met: Metric
    
    stream.on('error', callback)
      .on('data', (data: any) => { // on ouvre la bdd
        const [_, k, timestamp] = data.key.split(":")
        const value = data.value
        if (key != data.key) { // atention, gérer les erreurs (entrées incorrectes)
          console.log(`LevelDB error: ${data.key} does not match key ${key}`)
        } else {
          met = new Metric(timestamp, value)
        }
      })
      .on('end', (err: Error) => {
        callback(null, met);
       })
      .on("close", () => {
        console.log("Stream ended");
      });
      this.db.del(key); // attention: key doit être comme dans la base de donnée (metric:Pierre-Louis:1572876000000)

    }

    public getAll(callback: (error: Error | null, result?: Metric[]) => void) {
      var result = new Array();
      const rs = this.db.createReadStream()
          .on('data', function (data) {
            result.push(data)
          })
          .on('error', function (err) {
            console.log('Oh my!', err)
          })
          .on('close', function () {
            console.log('Stream closed')
          })
          .on('end', function () {
            console.log('Stream ended')
            callback(null, result);
  
          })
    }
  
}
