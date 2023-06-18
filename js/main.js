function savePost() {
    //get values that user entered
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let id = document.getElementById('id').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}