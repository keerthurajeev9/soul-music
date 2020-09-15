const buttons = document.querySelector('#gallery-buttons').children;
// console.log(buttons)

const collectionItems = document.querySelector('.collection-music').children;
// console.log(collectionItems);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('active');
    }
    this.classList.add('active');
    const target = this.getAttribute('data-target');

    const allRecords = document.getElementById('allCollections')
    const recordsArr = new Array
    for(let i=0; i < 16; i++) {
        recordsArr.push(allRecords.children[i])
    }

    for (let k = 0; k < recordsArr.length; k++) {
        if(target === 'all') {
            recordsArr[k].style.display = 'block';
        } else if (recordsArr[k].children[0].children[0].getAttribute('data-id') === target) {
            console.log(recordsArr[k].children[0].children[0].getAttribute('data-id'))
            recordsArr[k].style.display = 'block';
            recordsArr[k].parentElement.style.justifyContent = 'center';
        } else {
            recordsArr[k].style.display = 'none';
        }
    }
  })
}