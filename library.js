function Book(page, title, author) {
    this.page = page;
    this.title = title;
    this.author = author;
  }
  
  let library = [];
  
  function addToLibrary(page, title, author) {
    let newBook = new Book(page, title, author);
    library.push(newBook);
  }
  
  addToLibrary(300,"Yee", "Wee");
  addToLibrary(300,"Yee", "Wee");
  addToLibrary(300,"Yee", "Wee");

  for(i=0;i<library.length;i++){

  }
  console.log(library);