const useRandomData = () => {
    const ListoFUrls_id = Array(100)
                            .fill(null)
                            .map((e) => Math.ceil(100 * Math.random()));
    console.log(ListoFUrls_id)
    return ListoFUrls_id
}
export default useRandomData;