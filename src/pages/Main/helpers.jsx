export const getItems = async (sort, type) => {
    const response = await fetch(`http://localhost:8080/items?sortDir=${sort}&type=${type}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })

    const items = await response.json()
        .then(shoes => {
            return(shoes)
        })
}