const useRandomData = () => {
    const ListoFUrls_id = [];
    // Math.random();
    for (let i = 0; i < 100; i++) {
        let random = Math.random()
        let intRandom = Math.ceil(random * 100)
        ListoFUrls_id.push(intRandom)
    }
    return ListoFUrls_id
}
export default useRandomData;