
const fetchData = async (data: string) => {
    try {
        const response = await fetch(data)
        await response.json()

    } catch (error) {
        console.error(error)
    }
}

fetchData('https://pokeapi.co/api/v2/pokemon/ditto')

const fetchDatados = async ():Promise<string> => {
    return new Promise((resolve, reject)=> {
        const success = true
        if(success) {
            resolve('Good')
        } else {
            resolve('Foul')
        }
    })
}

fetchDatados()
    .then((response)=>{
        console.log(response)
    })
    .catch((error)=>{
        console.error(error)
    })


const getPokemonPromise = (name: string): Promise<string> => {
    return new Promise((resolve, reject)=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response)=>{
            if(!response.ok){
                reject('Algo ha salido mal.')
            } 
            return response.json()
        })
        .then((data)=>{
            console.log('data: ', data)
            resolve(`El pokemos es ${data.name}`)
        })
        .catch((error)=>{
            reject(`Ocurrio un error: ${error}`)
        })
    })
}

getPokemonPromise('ditto')
    .then((message)=>{
        console.log(message)
    })
    .catch((error)=> {
        console.log(error)
    })


    