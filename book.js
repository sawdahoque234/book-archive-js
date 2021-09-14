const error = document.getElementById('error')
const inputbtn = () => {
    const inputField = document.getElementById('inputField')
    const inputText = inputField.value;
    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputText}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
        
            if (displayBook(data.docs)) {
                error.innerText = "";
            }
             else if (inputText === '') {
                error.innerText = "Search field cannot empty!!!";
            }
            else {
                error.innerText = "No Result Found!";
            }
        })
        const displayBook = data => {
        document.getElementById('resultfield').innerHTML=`<h4  class="text-center">Total result: ${data.length}`
        const searchBook = document.getElementById('book-details');
        searchBook.innerHTML = "";
        data.forEach(book => {
            const div = document.createElement('div')
            div.classList.add('book')

            const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            // console.log(imgUrl)
            div.innerHTML = `
            <div  class="col">
            <div  class="card"> 
            <img src="${imgUrl}" class="img-fluid mx-auto d-block w-100 h-100">
            <div class="card-body">
            <h5 class="card-title text-danger">${book.title}</h5>
            <p class="card-text  text-success">Author_Name:${book.author_name[0]}</p>
            <small class="card-text">Publisher_Name: ${book.publisher[0]}</small>
            <p class="card-text">First Publish Year:${book.first_publish_year}</p>
            </div>
            </div>
            </div>
        `
            searchBook.appendChild(div);
        }
        )
    }
}
