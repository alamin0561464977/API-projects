const lodeKanye = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('kanye').innerText = data.quote;
        })

};
lodeKanye()