class Queue<T> {
  private queue: T[] = [];
  public Push(value: T) {
    this.queue.push(value);
  }

  public Pop(): T | undefined {
    return this.queue.shift();
  }
}

const queue: Queue<number> = new Queue<number>();
const queueString: Queue<string> = new Queue<string>();

queue.Push(10);
queue.Push(5);
console.log(queue.Pop());
console.log(queue.Pop());

queueString.Push('Hola');
queueString.Push('Genericos');

console.log(queueString.Pop());
console.log(queueString.Pop());

/** Ejemplo dos llamando un metodo de otro generico*/

interface IStream {
  ReadStream(): Int8Array;
}

class Data<T extends IStream> {
  ReadStream(stream: T) {
    let output = stream.ReadStream();
    console.log(output.byteLength);
  }
}

class WebStream implements IStream {
  ReadStream(): Int8Array {
   let array: Int8Array = new Int8Array(8);
    for( let index = 0; index < array.length; index ++) {
      array[index] = index + 3;
    }
    return array;
  }
}

class DiskStream implements IStream {
    ReadStream(): Int8Array {
   let array: Int8Array = new Int8Array(20);
    for( let index = 0; index < array.length; index ++) {
      array[index] = index + 3;
    }
    return array;
  }
}

const webStream = new Data<WebStream>();
const diskStream = new Data<DiskStream>();

webStream.ReadStream(new WebStream());
diskStream.ReadStream(new DiskStream());

