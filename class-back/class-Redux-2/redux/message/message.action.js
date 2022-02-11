const GM = 'GM';
const GN = 'GN'
let gmAction = () => {
    console.log("GM Action - reduc Action File")
    return { type: GM }
}
let gnAction = () => {
    return { type: GN }
}
export { gmAction, gnAction, GM, GN }


//what is action?
