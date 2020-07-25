/**
Tentativa de aplicar um mediator

class ConcreteMediator implements Mediator {
    private computer1: Computer1;

    private computer2: Computer2;

    constructor(c1: Component1, c2: Component2) {
        this.computer1 = c1;
        this.computer1.setMediator(this);
        this.computer2 = c2;
        this.computer2.setMediator(this);
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Computer1 extends BaseComponent {
}

class Computer2 extends BaseComponent {
}


class List<Computer> {


  constructor(nome, neighbor1, neighbor2) {
    this.nome = nome;
  }
}
*/

class Computer {
  public nome;
  constructor(nome) {
    this.nome = nome;
  }
}

class Search {
  public  keywords;
  public  destination;
  public  status;

  constructor(keywords, destination) {
      this.keywords = keywords;
      this.destination = destination;
      this.status = "NOT FOUND";
  }
}

class Upload {
  public  filename;
  public  content;
  public  status;

  constructor(filename, content) {
      this.filename = filename;
      this.content = content;
      this.status = "UPLOAD COMPLETE";
  }
}

class Execute {
  public  script;
  public  status;

  constructor(script) {
      this.script = script;
      this.status = "EXECUTED SCRIPT"
  }
}

class Neighbors {
  public  depth;
  public  destination;
  public  neighbor;

  constructor(depth, destination) {
      this.depth = depth;
      this.destination = destination;
      this.neighbor = this.getNeighbor(depth);
  }
  public getNeighbor (depth): Computer{
    //aplicar lógica das ligações p2p
    return new Computer('Computer 2');
  }
}

/**
 * The client code.
 */
 function iniciarInstancia(form) {
     console.log(form.command.value);

     let instance;

     if (form.command.value == 'search') {
         instance = new Search(form.keyword.value, form.destination.value);
     }
     if (form.command.value == 'upload') {
          instance = new Upload(form.filename.value, form.content.value);
     }
     if (form.command.value == 'execute') {
           instance = new Execute(form.script.value);
     }
     if (form.command.value == 'neighbors') {
          instance = new Neighbors(form.depth.value, form.destination2.value);
     }

     document.querySelector('#chamada').innerHTML = JSON.stringify(instance)

 }
