const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    };
});


let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button')

    li.textContent = item;
    deleteButton.textContent = '❌';

    li.append(deleteButton);
    list.append(li)

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        item = '';
        deleteChapter(li.textContent);
        input.focus();
    })
};

function setChapterList() {
    localStorage.setItem('myScriptureList', JSON.stringify(chaptersArray))
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myScriptureList'))
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}