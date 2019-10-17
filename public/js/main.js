// function onDeleteItem(event, id) {
//     event.preventDefault();

//     if (confirm('Are you sure?')) {
//         fetch('/', {
//             method: 'DELETE',
//             body: JSON.stringify({
//                 id: id
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         })
//             .then(res => {
//                 // window.location.reload('/');
//                 console.log('main', id)
//                 document.getElementById(id).remove();
//             });
//     }
// }
