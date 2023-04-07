const baseUrl = ''

export const getOrderData = async () =>{
    try {
        const respones = await fetch(`${baseUrl}`)
        const result = respones.json()
        return result
        
    } catch (error) {
        throw new Error({message: error.message})
    }
}