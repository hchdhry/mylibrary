const make= document.querySelector("button")
make.addEventListener('click', function(event){
  event.preventDefault();
  const authorValue = author.value;
  const titleValue = title.value;
  const pageValue = page.value;
  if(authorValue !== "" && titleValue !== "" && pageValue !== ""){
  addToLibrary(pageValue,titleValue,authorValue)
  createbook()
  }
  else{
    alert("Please fill in all fields.");
  }
});









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
  


  const bookList = document.getElementById("book-list");
  function createbook() {
    bookList.innerHTML = ''; 
  
    for (let i = 0; i < library.length; i++) {
      const book = library[i];
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      const authorCell = document.createElement('td');
      const pageCell = document.createElement('td');
  
      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      pageCell.textContent = book.page;
  
      row.appendChild(titleCell);
      row.appendChild(authorCell);
      row.appendChild(pageCell);
  
  
  
      bookList.appendChild(row);
    }
  }