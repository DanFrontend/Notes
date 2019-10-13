function onDeleteItem(event, id) {
    event.preventDefault();

    if (confirm('Are you sure?')) {
        fetch('/todos', {
            method: 'DELETE',
            body: JSON.stringify({
                id: id
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                // window.location.reload();
                document.getElementById(id).remove();
            });
    }
}