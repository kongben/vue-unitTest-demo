function getUserInfo() {
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve({
                name: 'olive',
                desc: 'software engineer',
            })
        },1000)
    })
}
export {
    getUserInfo,
};

