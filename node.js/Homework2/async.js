const blogList = [
    { name: 'Blog 1', content: 'lorem1 lorem1 lorem1', author: 'İlker Öztürk' },
    { name: 'Blog 2', content: 'lorem2 lorem2 lorem2', author: 'Ediz Öztürk' },
    { name: 'Blog 3', content: 'lorem3 lorem3 lorem3', author: 'Ezgi Öztürk' },
    { name: 'Blog 4', content: 'lorem4 lorem4 lorem4', author: 'Zeynep Öztürk' },
]

const printList = () => {
    blogList.map(value => {
        console.log(value)
    })
}
const addnewitem = {name: 'Blog 5', content: 'lorem5 lorem5 lorem5', author: 'Eren Buldu'};

const updatelist = (value) => {
    return new Promise((resolve, reject) => {
        if (value !== null && value !== '') {
            blogList.push(value);
            resolve('Yeni item başarıyla listeye eklendi!');
        }
        else {
            reject('Yeni item yok ya da eklenemedi!');
        }
    })
}

async function proceedlist() {
    try {
        if (addnewitem !== null && addnewitem !== '') {
            await updatelist(addnewitem).then(value => {console.log(value)}).catch(error => {console.log(error)});;
            printList()
            console.log(`Güncel Liste = ${blogList.length}'adettir.`);
        } else {
            await updatelist(addnewitem).then(value => {console.log(value)}).catch(error => {console.log(error)});;
            printList();
            console.log(`Güncel Liste = ${blogList.length}'adettir.`);
        }
    } catch { console.log('Bir hata oluştu!') };

}
proceedlist();